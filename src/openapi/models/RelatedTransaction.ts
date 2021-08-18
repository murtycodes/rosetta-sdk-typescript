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
    Direction,
    DirectionFromJSON,
    DirectionToJSON,
    NetworkIdentifier,
    NetworkIdentifierFromJSON,
    NetworkIdentifierToJSON,
    TransactionIdentifier,
    TransactionIdentifierFromJSON,
    TransactionIdentifierToJSON,
} from './';

/**
 * The related_transaction allows implementations to link together multiple transactions. An unpopulated network identifier indicates that the related transaction is on the same network.
 * @export
 * @interface RelatedTransaction
 */
export interface RelatedTransaction {
    /**
     *
     * @type {NetworkIdentifier}
     * @memberof RelatedTransaction
     */
    network_identifier?: NetworkIdentifier;
    /**
     *
     * @type {TransactionIdentifier}
     * @memberof RelatedTransaction
     */
    transaction_identifier: TransactionIdentifier;
    /**
     *
     * @type {Direction}
     * @memberof RelatedTransaction
     */
    direction: Direction;
}

export function RelatedTransactionFromJSON(json: any): RelatedTransaction {
    return RelatedTransactionFromJSONTyped(json, false);
}

export function RelatedTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): RelatedTransaction {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        network_identifier: !exists(json, 'network_identifier') ? undefined : NetworkIdentifierFromJSON(json['network_identifier']),
        transaction_identifier: TransactionIdentifierFromJSON(json['transaction_identifier']),
        direction: DirectionFromJSON(json['direction']),
    };
}

export function RelatedTransactionToJSON(value?: RelatedTransaction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        network_identifier: NetworkIdentifierToJSON(value.network_identifier),
        transaction_identifier: TransactionIdentifierToJSON(value.transaction_identifier),
        direction: DirectionToJSON(value.direction),
    };
}
