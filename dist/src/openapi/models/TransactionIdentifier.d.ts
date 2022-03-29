/**
 * The transaction_identifier uniquely identifies a transaction in a particular network and block or in the mempool.
 * @export
 * @interface TransactionIdentifier
 */
export interface TransactionIdentifier {
    /**
     * Any transactions that are attributable only to a block (ex: a block event) should use the hash of the block as the identifier.
     * @type {string}
     * @memberof TransactionIdentifier
     */
    hash: string;
}
export declare function TransactionIdentifierFromJSON(json: any): TransactionIdentifier;
export declare function TransactionIdentifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionIdentifier;
export declare function TransactionIdentifierToJSON(value?: TransactionIdentifier | null): any;
//# sourceMappingURL=TransactionIdentifier.d.ts.map