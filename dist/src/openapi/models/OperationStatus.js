"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationStatusToJSON = exports.OperationStatusFromJSONTyped = exports.OperationStatusFromJSON = void 0;
function OperationStatusFromJSON(json) {
    return OperationStatusFromJSONTyped(json, false);
}
exports.OperationStatusFromJSON = OperationStatusFromJSON;
function OperationStatusFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        status: json['status'],
        successful: json['successful'],
    };
}
exports.OperationStatusFromJSONTyped = OperationStatusFromJSONTyped;
function OperationStatusToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        status: value.status,
        successful: value.successful,
    };
}
exports.OperationStatusToJSON = OperationStatusToJSON;
