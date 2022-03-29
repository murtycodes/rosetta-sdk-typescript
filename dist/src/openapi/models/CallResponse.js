"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallResponseToJSON = exports.CallResponseFromJSONTyped = exports.CallResponseFromJSON = void 0;
function CallResponseFromJSON(json) {
    return CallResponseFromJSONTyped(json, false);
}
exports.CallResponseFromJSON = CallResponseFromJSON;
function CallResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        result: json['result'],
        idempotent: json['idempotent'],
    };
}
exports.CallResponseFromJSONTyped = CallResponseFromJSONTyped;
function CallResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        result: value.result,
        idempotent: value.idempotent,
    };
}
exports.CallResponseToJSON = CallResponseToJSON;
