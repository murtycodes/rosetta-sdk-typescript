import { ModelError } from '../openapi';
/**
 * Generic server error that contains the response status and body to be sent in the http response.
 */
export declare class ServerError extends Error {
    readonly status: number;
    readonly code: string;
    readonly body?: unknown;
    constructor(message: string, status: number, code: string, body?: unknown);
    /**
     * It creates a ServerError that Rosseta's error payload.
     *
     * @param modelError the exception to be raised.
     */
    static rosettaError(modelError: ModelError): ServerError;
}
//# sourceMappingURL=ServerError.d.ts.map