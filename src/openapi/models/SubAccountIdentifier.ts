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
/**
 * An account may have state specific to a contract address (ERC-20 token) and/or a stake (delegated balance). The sub_account_identifier should specify which state (if applicable) an account instantiation refers to.
 * @export
 * @interface SubAccountIdentifier
 */
export interface SubAccountIdentifier {
    /**
     * The SubAccount address may be a cryptographic value or some other identifier (ex: bonded) that uniquely specifies a SubAccount.
     * @type {string}
     * @memberof SubAccountIdentifier
     */
    address: string;
    /**
     * If the SubAccount address is not sufficient to uniquely specify a SubAccount, any other identifying information can be stored here. It is important to note that two SubAccounts with identical addresses but differing metadata will not be considered equal by clients.
     * @type {object}
     * @memberof SubAccountIdentifier
     */
    metadata?: object;
}

export function SubAccountIdentifierFromJSON(json: any): SubAccountIdentifier {
    return SubAccountIdentifierFromJSONTyped(json, false);
}

export function SubAccountIdentifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubAccountIdentifier {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        address: json['address'],
        metadata: !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function SubAccountIdentifierToJSON(value?: SubAccountIdentifier | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        address: value.address,
        metadata: value.metadata,
    };
}
