/**
 * CallResponse contains the result of a `/call` invocation.
 * @export
 * @interface CallResponse
 */
export interface CallResponse {
    /**
     * Result contains the result of the `/call` invocation. This result will not be inspected or interpreted by Rosetta tooling and is left to the caller to decode.
     * @type {object}
     * @memberof CallResponse
     */
    result: object;
    /**
     * Idempotent indicates that if `/call` is invoked with the same CallRequest again, at any point in time, it will return the same CallResponse. Integrators may cache the CallResponse if this is set to true to avoid making unnecessary calls to the Rosetta implementation. For this reason, implementers should be very conservative about returning true here or they could cause issues for the caller.
     * @type {boolean}
     * @memberof CallResponse
     */
    idempotent: boolean;
}
export declare function CallResponseFromJSON(json: any): CallResponse;
export declare function CallResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CallResponse;
export declare function CallResponseToJSON(value?: CallResponse | null): any;
//# sourceMappingURL=CallResponse.d.ts.map