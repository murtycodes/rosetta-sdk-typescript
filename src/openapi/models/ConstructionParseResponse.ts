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
import { AccountIdentifier, AccountIdentifierFromJSON, AccountIdentifierToJSON, Operation, OperationFromJSON, OperationToJSON } from './';

/**
 * ConstructionParseResponse contains an array of operations that occur in a transaction blob. This should match the array of operations provided to `/construction/preprocess` and `/construction/payloads`.
 * @export
 * @interface ConstructionParseResponse
 */
export interface ConstructionParseResponse {
    /**
     *
     * @type {Array<Operation>}
     * @memberof ConstructionParseResponse
     */
    operations: Array<Operation>;
    /**
     * [DEPRECATED by `account_identifier_signers` in `v1.4.4`] All signers (addresses) of a particular transaction. If the transaction is unsigned, it should be empty.
     * @type {Array<string>}
     * @memberof ConstructionParseResponse
     */
    signers?: Array<string>;
    /**
     *
     * @type {Array<AccountIdentifier>}
     * @memberof ConstructionParseResponse
     */
    account_identifier_signers?: Array<AccountIdentifier>;
    /**
     *
     * @type {object}
     * @memberof ConstructionParseResponse
     */
    metadata?: object;
}

export function ConstructionParseResponseFromJSON(json: any): ConstructionParseResponse {
    return ConstructionParseResponseFromJSONTyped(json, false);
}

export function ConstructionParseResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConstructionParseResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        operations: (json['operations'] as Array<any>).map(OperationFromJSON),
        signers: !exists(json, 'signers') ? undefined : json['signers'],
        account_identifier_signers: !exists(json, 'account_identifier_signers')
            ? undefined
            : (json['account_identifier_signers'] as Array<any>).map(AccountIdentifierFromJSON),
        metadata: !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function ConstructionParseResponseToJSON(value?: ConstructionParseResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        operations: (value.operations as Array<any>).map(OperationToJSON),
        signers: value.signers,
        account_identifier_signers:
            value.account_identifier_signers === undefined
                ? undefined
                : (value.account_identifier_signers as Array<any>).map(AccountIdentifierToJSON),
        metadata: value.metadata,
    };
}
