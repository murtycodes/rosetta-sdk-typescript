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
import { CurveType } from './';
/**
 * PublicKey contains a public key byte array for a particular CurveType encoded in hex. Note that there is no PrivateKey struct as this is NEVER the concern of an implementation.
 * @export
 * @interface PublicKey
 */
export interface PublicKey {
    /**
     * Hex-encoded public key bytes in the format specified by the CurveType.
     * @type {string}
     * @memberof PublicKey
     */
    hex_bytes: string;
    /**
     *
     * @type {CurveType}
     * @memberof PublicKey
     */
    curve_type: CurveType;
}
export declare function PublicKeyFromJSON(json: any): PublicKey;
export declare function PublicKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicKey;
export declare function PublicKeyToJSON(value?: PublicKey | null): any;
//# sourceMappingURL=PublicKey.d.ts.map