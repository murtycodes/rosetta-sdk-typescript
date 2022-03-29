/**
 * OperationStatus is utilized to indicate which Operation status are considered successful.
 * @export
 * @interface OperationStatus
 */
export interface OperationStatus {
    /**
     * The status is the network-specific status of the operation.
     * @type {string}
     * @memberof OperationStatus
     */
    status: string;
    /**
     * An Operation is considered successful if the Operation.Amount should affect the Operation.Account. Some blockchains (like Bitcoin) only include successful operations in blocks but other blockchains (like Ethereum) include unsuccessful operations that incur a fee. To reconcile the computed balance from the stream of Operations, it is critical to understand which Operation.Status indicate an Operation is successful and should affect an Account.
     * @type {boolean}
     * @memberof OperationStatus
     */
    successful: boolean;
}
export declare function OperationStatusFromJSON(json: any): OperationStatus;
export declare function OperationStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): OperationStatus;
export declare function OperationStatusToJSON(value?: OperationStatus | null): any;
//# sourceMappingURL=OperationStatus.d.ts.map