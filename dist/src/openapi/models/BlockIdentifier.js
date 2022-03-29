"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockIdentifierToJSON = exports.BlockIdentifierFromJSONTyped = exports.BlockIdentifierFromJSON = void 0;
function BlockIdentifierFromJSON(json) {
    return BlockIdentifierFromJSONTyped(json, false);
}
exports.BlockIdentifierFromJSON = BlockIdentifierFromJSON;
function BlockIdentifierFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        index: json['index'],
        hash: json['hash'],
    };
}
exports.BlockIdentifierFromJSONTyped = BlockIdentifierFromJSONTyped;
function BlockIdentifierToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        index: value.index,
        hash: value.hash,
    };
}
exports.BlockIdentifierToJSON = BlockIdentifierToJSON;
