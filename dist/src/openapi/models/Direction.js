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
exports.DirectionToJSON = exports.DirectionFromJSONTyped = exports.DirectionFromJSON = exports.Direction = void 0;
/**
 * Used by RelatedTransaction to indicate the direction of the relation (i.e. cross-shard/cross-network sends may reference `backward` to an earlier transaction and async execution may reference `forward`). Can be used to indicate if a transaction relation is from child to parent or the reverse.
 * @export
 * @enum {string}
 */
var Direction;
(function (Direction) {
    Direction["forward"] = "forward";
    Direction["backward"] = "backward";
})(Direction = exports.Direction || (exports.Direction = {}));
function DirectionFromJSON(json) {
    return DirectionFromJSONTyped(json, false);
}
exports.DirectionFromJSON = DirectionFromJSON;
function DirectionFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.DirectionFromJSONTyped = DirectionFromJSONTyped;
function DirectionToJSON(value) {
    return value;
}
exports.DirectionToJSON = DirectionToJSON;
