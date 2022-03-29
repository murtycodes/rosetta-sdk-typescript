/**
 * The block_identifier uniquely identifies a block in a particular network.
 * @export
 * @interface BlockIdentifier
 */
export interface BlockIdentifier {
    /**
     * This is also known as the block height.
     * @type {number}
     * @memberof BlockIdentifier
     */
    index: number;
    /**
     *
     * @type {string}
     * @memberof BlockIdentifier
     */
    hash: string;
}
export declare function BlockIdentifierFromJSON(json: any): BlockIdentifier;
export declare function BlockIdentifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockIdentifier;
export declare function BlockIdentifierToJSON(value?: BlockIdentifier | null): any;
//# sourceMappingURL=BlockIdentifier.d.ts.map