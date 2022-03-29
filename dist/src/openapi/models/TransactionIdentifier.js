"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionIdentifierToJSON = exports.TransactionIdentifierFromJSONTyped = exports.TransactionIdentifierFromJSON = void 0;
function TransactionIdentifierFromJSON(json) {
    return TransactionIdentifierFromJSONTyped(json, false);
}
exports.TransactionIdentifierFromJSON = TransactionIdentifierFromJSON;
function TransactionIdentifierFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        hash: json['hash'],
    };
}
exports.TransactionIdentifierFromJSONTyped = TransactionIdentifierFromJSONTyped;
function TransactionIdentifierToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        hash: value.hash,
    };
}
exports.TransactionIdentifierToJSON = TransactionIdentifierToJSON;
