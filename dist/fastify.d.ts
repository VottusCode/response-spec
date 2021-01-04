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
export declare const ErrorKinds: {
    USER_INPUT: string;
    UNAUTHORIZED: string;
    FORBIDDEN: string;
    INTERNAL: string;
};
export interface SuccessResponse<Data extends BaseResponse["data"]> extends BaseResponse {
    success: true;
    data: Data;
}
export interface ErrorResponse<Error extends BaseResponse["error"]> extends BaseResponse {
    success: false;
    error: Error;
}
export declare const successRes: <Data extends unknown>(data: Data, reply?: FastifyReply | null, status?: number) => SuccessResponse<Data>;
export declare const errorRes: <Error_1 extends ErrorDescription>(error: Error_1, reply?: FastifyReply | null, status?: number) => ErrorResponse<Error_1>;
