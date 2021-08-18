/* tslint:disable */
/* eslint-disable */
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

import { exists } from '../runtime';
import { Transaction, TransactionFromJSON, TransactionToJSON } from './';

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

export function MempoolTransactionResponseFromJSON(json: any): MempoolTransactionResponse {
    return MempoolTransactionResponseFromJSONTyped(json, false);
}

export function MempoolTransactionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MempoolTransactionResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        transaction: TransactionFromJSON(json['transaction']),
        metadata: !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function MempoolTransactionResponseToJSON(value?: MempoolTransactionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        transaction: TransactionToJSON(value.transaction),
        metadata: value.metadata,
    };
}
