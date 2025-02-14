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
import { NetworkIdentifier, Operation, PublicKey } from './';
/**
 * ConstructionPayloadsRequest is the request to `/construction/payloads`. It contains the network, a slice of operations, and arbitrary metadata that was returned by the call to `/construction/metadata`. Optionally, the request can also include an array of PublicKeys associated with the AccountIdentifiers returned in ConstructionPreprocessResponse.
 * @export
 * @interface ConstructionPayloadsRequest
 */
export interface ConstructionPayloadsRequest {
    /**
     *
     * @type {NetworkIdentifier}
     * @memberof ConstructionPayloadsRequest
     */
    network_identifier: NetworkIdentifier;
    /**
     *
     * @type {Array<Operation>}
     * @memberof ConstructionPayloadsRequest
     */
    operations: Array<Operation>;
    /**
     *
     * @type {object}
     * @memberof ConstructionPayloadsRequest
     */
    metadata?: object;
    /**
     *
     * @type {Array<PublicKey>}
     * @memberof ConstructionPayloadsRequest
     */
    public_keys?: Array<PublicKey>;
}
export declare function ConstructionPayloadsRequestFromJSON(json: any): ConstructionPayloadsRequest;
export declare function ConstructionPayloadsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConstructionPayloadsRequest;
export declare function ConstructionPayloadsRequestToJSON(value?: ConstructionPayloadsRequest | null): any;
//# sourceMappingURL=ConstructionPayloadsRequest.d.ts.map