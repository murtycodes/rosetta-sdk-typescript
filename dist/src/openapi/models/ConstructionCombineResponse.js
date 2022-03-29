"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstructionCombineResponseToJSON = exports.ConstructionCombineResponseFromJSONTyped = exports.ConstructionCombineResponseFromJSON = void 0;
function ConstructionCombineResponseFromJSON(json) {
    return ConstructionCombineResponseFromJSONTyped(json, false);
}
exports.ConstructionCombineResponseFromJSON = ConstructionCombineResponseFromJSON;
function ConstructionCombineResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        signed_transaction: json['signed_transaction'],
    };
}
exports.ConstructionCombineResponseFromJSONTyped = ConstructionCombineResponseFromJSONTyped;
function ConstructionCombineResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        signed_transaction: value.signed_transaction,
    };
}
exports.ConstructionCombineResponseToJSON = ConstructionCombineResponseToJSON;
