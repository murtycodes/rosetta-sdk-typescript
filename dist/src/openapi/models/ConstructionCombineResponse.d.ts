/**
 * ConstructionCombineResponse is returned by `/construction/combine`. The network payload will be sent directly to the `construction/submit` endpoint.
 * @export
 * @interface ConstructionCombineResponse
 */
export interface ConstructionCombineResponse {
    /**
     *
     * @type {string}
     * @memberof ConstructionCombineResponse
     */
    signed_transaction: string;
}
export declare function ConstructionCombineResponseFromJSON(json: any): ConstructionCombineResponse;
export declare function ConstructionCombineResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConstructionCombineResponse;
export declare function ConstructionCombineResponseToJSON(value?: ConstructionCombineResponse | null): any;
//# sourceMappingURL=ConstructionCombineResponse.d.ts.map