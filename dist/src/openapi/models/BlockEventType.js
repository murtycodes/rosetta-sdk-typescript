"use strict";
/* tslint:disable */
/* eslint-disable */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockEventTypeToJSON = exports.BlockEventTypeFromJSONTyped = exports.BlockEventTypeFromJSON = exports.BlockEventType = void 0;
/**
 * BlockEventType determines if a BlockEvent represents the addition or removal of a block.
 * @export
 * @enum {string}
 */
var BlockEventType;
(function (BlockEventType) {
    BlockEventType["added"] = "block_added";
    BlockEventType["removed"] = "block_removed";
})(BlockEventType = exports.BlockEventType || (exports.BlockEventType = {}));
function BlockEventTypeFromJSON(json) {
    return BlockEventTypeFromJSONTyped(json, false);
}
exports.BlockEventTypeFromJSON = BlockEventTypeFromJSON;
function BlockEventTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.BlockEventTypeFromJSONTyped = BlockEventTypeFromJSONTyped;
function BlockEventTypeToJSON(value) {
    return value;
}
exports.BlockEventTypeToJSON = BlockEventTypeToJSON;
