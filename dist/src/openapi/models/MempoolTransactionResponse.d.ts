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
 * A MempoolTransactionResponse contains an estimate of a mempool transaction. It may not be possible to know the full impact of a transaction in the mempool (ex: fee paid).
 * @export
 * @interface MempoolTransactionResponse
 */
export interface MempoolTransactionResponse {
    /**
     *
     * @type {Transaction}
     * @memberof MempoolTransactionResponse
     */
    transaction: Transaction;
    /**
     *
     * @type {object}
     * @memberof MempoolTransactionResponse
     */
    metadata?: object;
}
export declare function MempoolTransactionResponseFromJSON(json: any): MempoolTransactionResponse;
export declare function MempoolTransactionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MempoolTransactionResponse;
export declare function MempoolTransactionResponseToJSON(value?: MempoolTransactionResponse | null): any;
//# sourceMappingURL=MempoolTransactionResponse.d.ts.map