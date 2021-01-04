# Vottus' Response Specification

This spec is for made for JSON responses.

### General

- API always returns a `Content-Type: application/json` header

### Status Code

You always send a HTTP code of 200, but there are 2 exceptions:

- Internal Server Error (error kind: internal) - HTTP code **500**
- Validation Error (error kind: validation) - HTTP code **400**

### Successful Response

Successful response passes a success property that is of value true, like so:

```json
{
  "success": true
}
```

Additionally, when passing data in the response, you may create a data object inside of which you create appropriate property, for example:

```json
{
  "success": true,
  "data": {
    "user": {
    }
  }
}
```

You may pass multiple properties inside of the data objects. You may also pass a string, boolean,
or a different kind of primitive as a value of data properties:

```json
{
  "success": true,
  "data": {
    "user": {
    },
    "loginValidUntil": "2021-01-04T07:19:18.080Z"
  }
}
```

### Failed/Error Response

Response that fails whether because of user input or because of internal error passes a success property that is of value false and an error object
with properties "kind" and "message":

```json
{
  "success": true,
  "error": {
    "kind": "user_input",
    "message": "Invalid token"
  }
}
```

Kind represents the kind of error that occurred or why the error occurred in the first place. Commonly, following kinds are used:

- user_input
  - Meaning that error occurred because of some sort of user input, for example missing/invalid request body/headers
- unauthorized
  - Meaning that the user is not authorized for the endpoint. Eg. not logged in.
  - When the user is however authenticated in some form but is not allowed to perform certain actions, **forbidden** is used instead!
- forbidden
  - Meaning that user is authenticated but unauthorized to perform certain action.
- internal
  - Internal Server Error. For this kind an HTTP code 500 is sent.
- validation
  - Validation Error. For this kind an HTTP code 400 is sent.
  
<br />
  
Message is a localized message further describes the error that occurred.
