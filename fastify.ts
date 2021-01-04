import { FastifyReply } from "fastify";

/**
 * Fastify implementation of the spec.
 *
 * @author Mia <vottus@vott.us>
 */

export interface ErrorDescription {
  kind: string;
  message: string;
}

export interface BaseResponse<D = unknown, E = ErrorDescription> {
  success: boolean;
  error?: E;
  data?: D;
}

export const ErrorKinds = {
  USER_INPUT: "user_input",
  UNAUTHORIZED: "unauthorized",
  FORBIDDEN: "forbidden",
  INTERNAL: "internal",
};

export interface SuccessResponse<Data extends BaseResponse["data"]>
  extends BaseResponse {
  success: true;
  data: Data;
}

export interface ErrorResponse<Error extends BaseResponse["error"]>
  extends BaseResponse {
  success: false;
  error: Error;
}

export const successRes = <Data extends BaseResponse["data"]>(
  data: Data,
  reply: FastifyReply | null = null,
  status = 200
): SuccessResponse<Data> => {
  const res: SuccessResponse<Data> = {
    success: true,
    data,
  };

  if (reply) reply.status(status).send(res);
  return res;
};

export const errorRes = <Error extends BaseResponse["error"]>(
  error: Error,
  reply: FastifyReply | null = null,
  status = 200
): ErrorResponse<Error> => {
  const res: ErrorResponse<Error> = {
    success: false,
    error,
  };

  if (reply) reply.status(status).send(res);
  return res;
};
