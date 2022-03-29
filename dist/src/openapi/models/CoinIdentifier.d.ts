/**
 * CoinIdentifier uniquely identifies a Coin.
 * @export
 * @interface CoinIdentifier
 */
export interface CoinIdentifier {
    /**
     * Identifier should be populated with a globally unique identifier of a Coin. In Bitcoin, this identifier would be transaction_hash:index.
     * @type {string}
     * @memberof CoinIdentifier
     */
    identifier: string;
}
export declare function CoinIdentifierFromJSON(json: any): CoinIdentifier;
export declare function CoinIdentifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoinIdentifier;
export declare function CoinIdentifierToJSON(value?: CoinIdentifier | null): any;
//# sourceMappingURL=CoinIdentifier.d.ts.map