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
 * A ConstructionMetadataRequest is utilized to get information required to construct a transaction. The Options object used to specify which metadata to return is left purposely unstructured to allow flexibility for implementers. Options is not required in the case that there is network-wide metadata of interest. Optionally, the request can also include an array of PublicKeys associated with the AccountIdentifiers returned in ConstructionPreprocessResponse.
 * @export
 * @interface ConstructionMetadataRequest
 */
export interface ConstructionMetadataRequest {
    /**
     *
     * @type {NetworkIdentifier}
     * @memberof ConstructionMetadataRequest
     */
    network_identifier: NetworkIdentifier;
    /**
     * Some blockchains require different metadata for different types of transaction construction (ex: delegation versus a transfer). Instead of requiring a blockchain node to return all possible types of metadata for construction (which may require multiple node fetches), the client can populate an options object to limit the metadata returned to only the subset required.
     * @type {object}
     * @memberof ConstructionMetadataRequest
     */
    options?: object;
    /**
     *
     * @type {Array<PublicKey>}
     * @memberof ConstructionMetadataRequest
     */
    public_keys?: Array<PublicKey>;
}
export declare function ConstructionMetadataRequestFromJSON(json: any): ConstructionMetadataRequest;
export declare function ConstructionMetadataRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConstructionMetadataRequest;
export declare function ConstructionMetadataRequestToJSON(value?: ConstructionMetadataRequest | null): any;
//# sourceMappingURL=ConstructionMetadataRequest.d.ts.map