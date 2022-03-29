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
exports.ConstructionMetadataResponseToJSON = exports.ConstructionMetadataResponseFromJSONTyped = exports.ConstructionMetadataResponseFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function ConstructionMetadataResponseFromJSON(json) {
    return ConstructionMetadataResponseFromJSONTyped(json, false);
}
exports.ConstructionMetadataResponseFromJSON = ConstructionMetadataResponseFromJSON;
function ConstructionMetadataResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        metadata: json['metadata'],
        suggested_fee: !(0, runtime_1.exists)(json, 'suggested_fee') ? undefined : json['suggested_fee'].map(_1.AmountFromJSON),
    };
}
exports.ConstructionMetadataResponseFromJSONTyped = ConstructionMetadataResponseFromJSONTyped;
function ConstructionMetadataResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        metadata: value.metadata,
        suggested_fee: value.suggested_fee === undefined ? undefined : value.suggested_fee.map(_1.AmountToJSON),
    };
}
exports.ConstructionMetadataResponseToJSON = ConstructionMetadataResponseToJSON;
