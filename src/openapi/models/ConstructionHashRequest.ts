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

import { NetworkIdentifier, NetworkIdentifierFromJSON, NetworkIdentifierToJSON } from './';

/**
 * ConstructionHashRequest is the input to the `/construction/hash` endpoint.
 * @export
 * @interface ConstructionHashRequest
 */
export interface ConstructionHashRequest {
    /**
     *
     * @type {NetworkIdentifier}
     * @memberof ConstructionHashRequest
     */
    network_identifier: NetworkIdentifier;
    /**
     *
     * @type {string}
     * @memberof ConstructionHashRequest
     */
    signed_transaction: string;
}

export function ConstructionHashRequestFromJSON(json: any): ConstructionHashRequest {
    return ConstructionHashRequestFromJSONTyped(json, false);
}

export function ConstructionHashRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConstructionHashRequest {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        network_identifier: NetworkIdentifierFromJSON(json['network_identifier']),
        signed_transaction: json['signed_transaction'],
    };
}

export function ConstructionHashRequestToJSON(value?: ConstructionHashRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        network_identifier: NetworkIdentifierToJSON(value.network_identifier),
        signed_transaction: value.signed_transaction,
    };
}
