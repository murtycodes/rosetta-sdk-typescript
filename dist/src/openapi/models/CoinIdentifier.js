"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinIdentifierToJSON = exports.CoinIdentifierFromJSONTyped = exports.CoinIdentifierFromJSON = void 0;
function CoinIdentifierFromJSON(json) {
    return CoinIdentifierFromJSONTyped(json, false);
}
exports.CoinIdentifierFromJSON = CoinIdentifierFromJSON;
function CoinIdentifierFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        identifier: json['identifier'],
    };
}
exports.CoinIdentifierFromJSONTyped = CoinIdentifierFromJSONTyped;
function CoinIdentifierToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        identifier: value.identifier,
    };
}
exports.CoinIdentifierToJSON = CoinIdentifierToJSON;
