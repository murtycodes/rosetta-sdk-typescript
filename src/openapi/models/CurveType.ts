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

/**
 * CurveType is the type of cryptographic curve associated with a PublicKey. * secp256k1: SEC compressed - `33 bytes` (https://secg.org/sec1-v2.pdf#subsubsection.2.3.3) * secp256r1: SEC compressed - `33 bytes` (https://secg.org/sec1-v2.pdf#subsubsection.2.3.3) * edwards25519: `y (255-bits) || x-sign-bit (1-bit)` - `32 bytes` (https://ed25519.cr.yp.to/ed25519-20110926.pdf) * tweedle: 1st pk : Fq.t (32 bytes) || 2nd pk : Fq.t (32 bytes) (https://github.com/CodaProtocol/coda/blob/develop/rfcs/0038-rosetta-construction-api.md#marshal-keys)
 * @export
 * @enum {string}
 */
export enum CurveType {
    secp256k1 = 'secp256k1',
    secp256r1 = 'secp256r1',
    edwards25519 = 'edwards25519',
    tweedle = 'tweedle',
}

export function CurveTypeFromJSON(json: any): CurveType {
    return CurveTypeFromJSONTyped(json, false);
}

export function CurveTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CurveType {
    return json as CurveType;
}

export function CurveTypeToJSON(value?: CurveType | null): any {
    return value as any;
}
