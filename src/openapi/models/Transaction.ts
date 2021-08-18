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
import {
    Operation,
    OperationFromJSON,
    OperationToJSON,
    RelatedTransaction,
    RelatedTransactionFromJSON,
    RelatedTransactionToJSON,
    TransactionIdentifier,
    TransactionIdentifierFromJSON,
    TransactionIdentifierToJSON,
} from './';

/**
 * Transactions contain an array of Operations that are attributable to the same TransactionIdentifier.
 * @export
 * @interface Transaction
 */
export interface Transaction {
    /**
     *
     * @type {TransactionIdentifier}
     * @memberof Transaction
     */
    transaction_identifier: TransactionIdentifier;
    /**
     *
     * @type {Array<Operation>}
     * @memberof Transaction
     */
    operations: Array<Operation>;
    /**
     *
     * @type {Array<RelatedTransaction>}
     * @memberof Transaction
     */
    related_transactions?: Array<RelatedTransaction>;
    /**
     * Transactions that are related to other transactions (like a cross-shard transaction) should include the tranaction_identifier of these transactions in the metadata.
     * @type {object}
     * @memberof Transaction
     */
    metadata?: object;
}

export function TransactionFromJSON(json: any): Transaction {
    return TransactionFromJSONTyped(json, false);
}

export function TransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Transaction {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        transaction_identifier: TransactionIdentifierFromJSON(json['transaction_identifier']),
        operations: (json['operations'] as Array<any>).map(OperationFromJSON),
        related_transactions: !exists(json, 'related_transactions')
            ? undefined
            : (json['related_transactions'] as Array<any>).map(RelatedTransactionFromJSON),
        metadata: !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function TransactionToJSON(value?: Transaction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        transaction_identifier: TransactionIdentifierToJSON(value.transaction_identifier),
        operations: (value.operations as Array<any>).map(OperationToJSON),
        related_transactions:
            value.related_transactions === undefined ? undefined : (value.related_transactions as Array<any>).map(RelatedTransactionToJSON),
        metadata: value.metadata,
    };
}
