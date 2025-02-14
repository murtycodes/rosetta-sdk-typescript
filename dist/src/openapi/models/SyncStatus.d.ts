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
 * SyncStatus is used to provide additional context about an implementation's sync status. This object is often used by implementations to indicate healthiness when block data cannot be queried until some sync phase completes or cannot be determined by comparing the timestamp of the most recent block with the current time.
 * @export
 * @interface SyncStatus
 */
export interface SyncStatus {
    /**
     * CurrentIndex is the index of the last synced block in the current stage. This is a separate field from current_block_identifier in NetworkStatusResponse because blocks with indices up to and including the current_index may not yet be queryable by the caller. To reiterate, all indices up to and including current_block_identifier in NetworkStatusResponse must be queryable via the /block endpoint (excluding indices less than oldest_block_identifier).
     * @type {number}
     * @memberof SyncStatus
     */
    current_index?: number;
    /**
     * TargetIndex is the index of the block that the implementation is attempting to sync to in the current stage.
     * @type {number}
     * @memberof SyncStatus
     */
    target_index?: number;
    /**
     * Stage is the phase of the sync process.
     * @type {string}
     * @memberof SyncStatus
     */
    stage?: string;
    /**
     * sycned is a boolean that indicates if an implementation has synced up to the most recent block. If this field is not populated, the caller should rely on a traditional tip timestamp comparison to determine if an implementation is synced. This field is particularly useful for quiescent blockchains (blocks only produced when there are pending transactions). In these blockchains, the most recent block could have a timestamp far behind the current time but the node could be healthy and at tip.
     * @type {boolean}
     * @memberof SyncStatus
     */
    synced?: boolean;
}
export declare function SyncStatusFromJSON(json: any): SyncStatus;
export declare function SyncStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): SyncStatus;
export declare function SyncStatusToJSON(value?: SyncStatus | null): any;
//# sourceMappingURL=SyncStatus.d.ts.map