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
import { NetworkIdentifier, PublicKey } from './';
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
export declare function ConstructionDeriveRequestFromJSON(json: any): ConstructionDeriveRequest;
export declare function ConstructionDeriveRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConstructionDeriveRequest;
export declare function ConstructionDeriveRequestToJSON(value?: ConstructionDeriveRequest | null): any;
//# sourceMappingURL=ConstructionDeriveRequest.d.ts.map