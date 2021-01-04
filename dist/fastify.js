"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorRes = exports.successRes = exports.ErrorKinds = void 0;
exports.ErrorKinds = {
    USER_INPUT: "user_input",
    UNAUTHORIZED: "unauthorized",
    FORBIDDEN: "forbidden",
    INTERNAL: "internal",
};
var successRes = function (data, reply, status) {
    if (reply === void 0) { reply = null; }
    if (status === void 0) { status = 200; }
    var res = {
        success: true,
        data: data,
    };
    if (reply)
        reply.status(status).send(res);
    return res;
};
exports.successRes = successRes;
var errorRes = function (error, reply, status) {
    if (reply === void 0) { reply = null; }
    if (status === void 0) { status = 200; }
    var res = {
        success: false,
        error: error,
    };
    if (reply)
        reply.status(status).send(res);
    return res;
};
exports.errorRes = errorRes;
