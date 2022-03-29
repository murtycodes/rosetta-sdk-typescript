"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerError = void 0;
/**
 * Generic server error that contains the response status and body to be sent in the http response.
 */
class ServerError extends Error {
    constructor(message, status, code, body) {
        super(message);
        this.status = status;
        this.code = code;
        this.body = body;
    }
    /**
     * It creates a ServerError that Rosseta's error payload.
     *
     * @param modelError the exception to be raised.
     */
    static rosettaError(modelError) {
        return new ServerError(modelError.message, 500, modelError.message, modelError);
    }
}
exports.ServerError = ServerError;
