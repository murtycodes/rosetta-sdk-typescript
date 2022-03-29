/**
 * Rosetta
 * Build Once. Integrate Your Blockchain Everywhere.
 *
 * The version of the OpenAPI document: 1.4.10
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { SigningPayload } from './';
/**
 * ConstructionTransactionResponse is returned by `/construction/payloads`. It contains an unsigned transaction blob (that is usually needed to construct the a network transaction from a collection of signatures) and an array of payloads that must be signed by the caller.
 * @export
 * @interface ConstructionPayloadsResponse
 */
export interface ConstructionPayloadsResponse {
    /**
     *
     * @type {string}
     * @memberof ConstructionPayloadsResponse
     */
    unsigned_transaction: string;
    /**
     *
     * @type {Array<SigningPayload>}
     * @memberof ConstructionPayloadsResponse
     */
    payloads: Array<SigningPayload>;
}
export declare function ConstructionPayloadsResponseFromJSON(json: any): ConstructionPayloadsResponse;
export declare function ConstructionPayloadsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConstructionPayloadsResponse;
export declare function ConstructionPayloadsResponseToJSON(value?: ConstructionPayloadsResponse | null): any;
//# sourceMappingURL=ConstructionPayloadsResponse.d.ts.map