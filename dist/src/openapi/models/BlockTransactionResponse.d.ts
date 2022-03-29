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
import { Transaction } from './';
/**
 * A BlockTransactionResponse contains information about a block transaction.
 * @export
 * @interface BlockTransactionResponse
 */
export interface BlockTransactionResponse {
    /**
     *
     * @type {Transaction}
     * @memberof BlockTransactionResponse
     */
    transaction: Transaction;
}
export declare function BlockTransactionResponseFromJSON(json: any): BlockTransactionResponse;
export declare function BlockTransactionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockTransactionResponse;
export declare function BlockTransactionResponseToJSON(value?: BlockTransactionResponse | null): any;
//# sourceMappingURL=BlockTransactionResponse.d.ts.map