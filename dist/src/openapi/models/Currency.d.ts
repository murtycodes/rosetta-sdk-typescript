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
 * Currency is composed of a canonical Symbol and Decimals. This Decimals value is used to convert an Amount.Value from atomic units (Satoshis) to standard units (Bitcoins).
 * @export
 * @interface Currency
 */
export interface Currency {
    /**
     * Canonical symbol associated with a currency.
     * @type {string}
     * @memberof Currency
     */
    symbol: string;
    /**
     * Number of decimal places in the standard unit representation of the amount. For example, BTC has 8 decimals. Note that it is not possible to represent the value of some currency in atomic units that is not base 10.
     * @type {number}
     * @memberof Currency
     */
    decimals: number;
    /**
     * Any additional information related to the currency itself. For example, it would be useful to populate this object with the contract address of an ERC-20 token.
     * @type {object}
     * @memberof Currency
     */
    metadata?: object;
}
export declare function CurrencyFromJSON(json: any): Currency;
export declare function CurrencyFromJSONTyped(json: any, ignoreDiscriminator: boolean): Currency;
export declare function CurrencyToJSON(value?: Currency | null): any;
//# sourceMappingURL=Currency.d.ts.map