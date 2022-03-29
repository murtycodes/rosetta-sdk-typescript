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
import { AccountIdentifier } from './';
/**
 * ConstructionPreprocessResponse contains `options` that will be sent unmodified to `/construction/metadata`. If it is not necessary to make a request to `/construction/metadata`, `options` should be omitted.  Some blockchains require the PublicKey of particular AccountIdentifiers to construct a valid transaction. To fetch these PublicKeys, populate `required_public_keys` with the AccountIdentifiers associated with the desired PublicKeys. If it is not necessary to retrieve any PublicKeys for construction, `required_public_keys` should be omitted.
 * @export
 * @interface ConstructionPreprocessResponse
 */
export interface ConstructionPreprocessResponse {
    /**
     * The options that will be sent directly to `/construction/metadata` by the caller.
     * @type {object}
     * @memberof ConstructionPreprocessResponse
     */
    options?: object;
    /**
     *
     * @type {Array<AccountIdentifier>}
     * @memberof ConstructionPreprocessResponse
     */
    required_public_keys?: Array<AccountIdentifier>;
}
export declare function ConstructionPreprocessResponseFromJSON(json: any): ConstructionPreprocessResponse;
export declare function ConstructionPreprocessResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConstructionPreprocessResponse;
export declare function ConstructionPreprocessResponseToJSON(value?: ConstructionPreprocessResponse | null): any;
//# sourceMappingURL=ConstructionPreprocessResponse.d.ts.map