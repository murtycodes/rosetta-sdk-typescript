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
exports.ConstructionPreprocessRequestToJSON = exports.ConstructionPreprocessRequestFromJSONTyped = exports.ConstructionPreprocessRequestFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function ConstructionPreprocessRequestFromJSON(json) {
    return ConstructionPreprocessRequestFromJSONTyped(json, false);
}
exports.ConstructionPreprocessRequestFromJSON = ConstructionPreprocessRequestFromJSON;
function ConstructionPreprocessRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        network_identifier: (0, _1.NetworkIdentifierFromJSON)(json['network_identifier']),
        operations: json['operations'].map(_1.OperationFromJSON),
        metadata: !(0, runtime_1.exists)(json, 'metadata') ? undefined : json['metadata'],
        max_fee: !(0, runtime_1.exists)(json, 'max_fee') ? undefined : json['max_fee'].map(_1.AmountFromJSON),
        suggested_fee_multiplier: !(0, runtime_1.exists)(json, 'suggested_fee_multiplier') ? undefined : json['suggested_fee_multiplier'],
    };
}
exports.ConstructionPreprocessRequestFromJSONTyped = ConstructionPreprocessRequestFromJSONTyped;
function ConstructionPreprocessRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        network_identifier: (0, _1.NetworkIdentifierToJSON)(value.network_identifier),
        operations: value.operations.map(_1.OperationToJSON),
        metadata: value.metadata,
        max_fee: value.max_fee === undefined ? undefined : value.max_fee.map(_1.AmountToJSON),
        suggested_fee_multiplier: value.suggested_fee_multiplier,
    };
}
exports.ConstructionPreprocessRequestToJSON = ConstructionPreprocessRequestToJSON;
