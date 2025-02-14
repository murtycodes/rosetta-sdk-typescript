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
import { BlockIdentifier, Coin } from './';
/**
 * AccountCoinsResponse is returned on the /account/coins endpoint and includes all unspent Coins owned by an AccountIdentifier.
 * @export
 * @interface AccountCoinsResponse
 */
export interface AccountCoinsResponse {
    /**
     *
     * @type {BlockIdentifier}
     * @memberof AccountCoinsResponse
     */
    block_identifier: BlockIdentifier;
    /**
     * If a blockchain is UTXO-based, all unspent Coins owned by an account_identifier should be returned alongside the balance. It is highly recommended to populate this field so that users of the Rosetta API implementation don't need to maintain their own indexer to track their UTXOs.
     * @type {Array<Coin>}
     * @memberof AccountCoinsResponse
     */
    coins: Array<Coin>;
    /**
     * Account-based blockchains that utilize a nonce or sequence number should include that number in the metadata. This number could be unique to the identifier or global across the account address.
     * @type {object}
     * @memberof AccountCoinsResponse
     */
    metadata?: object;
}
export declare function AccountCoinsResponseFromJSON(json: any): AccountCoinsResponse;
export declare function AccountCoinsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountCoinsResponse;
export declare function AccountCoinsResponseToJSON(value?: AccountCoinsResponse | null): any;
//# sourceMappingURL=AccountCoinsResponse.d.ts.map