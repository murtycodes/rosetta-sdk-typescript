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
import { AccountIdentifier, SignatureType } from './';
/**
 * SigningPayload is signed by the client with the keypair associated with an AccountIdentifier using the specified SignatureType. SignatureType can be optionally populated if there is a restriction on the signature scheme that can be used to sign the payload.
 * @export
 * @interface SigningPayload
 */
export interface SigningPayload {
    /**
     * [DEPRECATED by `account_identifier` in `v1.4.4`] The network-specific address of the account that should sign the payload.
     * @type {string}
     * @memberof SigningPayload
     */
    address?: string;
    /**
     *
     * @type {AccountIdentifier}
     * @memberof SigningPayload
     */
    account_identifier?: AccountIdentifier;
    /**
     *
     * @type {string}
     * @memberof SigningPayload
     */
    hex_bytes: string;
    /**
     *
     * @type {SignatureType}
     * @memberof SigningPayload
     */
    signature_type?: SignatureType;
}
export declare function SigningPayloadFromJSON(json: any): SigningPayload;
export declare function SigningPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): SigningPayload;
export declare function SigningPayloadToJSON(value?: SigningPayload | null): any;
//# sourceMappingURL=SigningPayload.d.ts.map