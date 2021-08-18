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
import { NetworkIdentifier, NetworkIdentifierFromJSON, NetworkIdentifierToJSON, PublicKey, PublicKeyFromJSON, PublicKeyToJSON } from './';

/**
 * ConstructionDeriveRequest is passed to the `/construction/derive` endpoint. Network is provided in the request because some blockchains have different address formats for different networks. Metadata is provided in the request because some blockchains allow for multiple address types (i.e. different address for validators vs normal accounts).
 * @export
 * @interface ConstructionDeriveRequest
 */
export interface ConstructionDeriveRequest {
    /**
     *
     * @type {NetworkIdentifier}
     * @memberof ConstructionDeriveRequest
     */
    network_identifier: NetworkIdentifier;
    /**
     *
     * @type {PublicKey}
     * @memberof ConstructionDeriveRequest
     */
    public_key: PublicKey;
    /**
     *
     * @type {object}
     * @memberof ConstructionDeriveRequest
     */
    metadata?: object;
}

export function ConstructionDeriveRequestFromJSON(json: any): ConstructionDeriveRequest {
    return ConstructionDeriveRequestFromJSONTyped(json, false);
}

export function ConstructionDeriveRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConstructionDeriveRequest {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        network_identifier: NetworkIdentifierFromJSON(json['network_identifier']),
        public_key: PublicKeyFromJSON(json['public_key']),
        metadata: !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function ConstructionDeriveRequestToJSON(value?: ConstructionDeriveRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        network_identifier: NetworkIdentifierToJSON(value.network_identifier),
        public_key: PublicKeyToJSON(value.public_key),
        metadata: value.metadata,
    };
}
