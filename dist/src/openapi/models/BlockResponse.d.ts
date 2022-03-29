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
import { Block, TransactionIdentifier } from './';
/**
 * A BlockResponse includes a fully-populated block or a partially-populated block with a list of other transactions to fetch (other_transactions). As a result of the consensus algorithm of some blockchains, blocks can be omitted (i.e. certain block indices can be skipped). If a query for one of these omitted indices is made, the response should not include a `Block` object. It is VERY important to note that blocks MUST still form a canonical, connected chain of blocks where each block has a unique index. In other words, the `PartialBlockIdentifier` of a block after an omitted block should reference the last non-omitted block.
 * @export
 * @interface BlockResponse
 */
export interface BlockResponse {
    /**
     *
     * @type {Block}
     * @memberof BlockResponse
     */
    block?: Block;
    /**
     * Some blockchains may require additional transactions to be fetched that weren't returned in the block response (ex: block only returns transaction hashes). For blockchains with a lot of transactions in each block, this can be very useful as consumers can concurrently fetch all transactions returned.
     * @type {Array<TransactionIdentifier>}
     * @memberof BlockResponse
     */
    other_transactions?: Array<TransactionIdentifier>;
}
export declare function BlockResponseFromJSON(json: any): BlockResponse;
export declare function BlockResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockResponse;
export declare function BlockResponseToJSON(value?: BlockResponse | null): any;
//# sourceMappingURL=BlockResponse.d.ts.map