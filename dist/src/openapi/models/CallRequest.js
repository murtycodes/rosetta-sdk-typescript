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
exports.CallRequestToJSON = exports.CallRequestFromJSONTyped = exports.CallRequestFromJSON = void 0;
const _1 = require("./");
function CallRequestFromJSON(json) {
    return CallRequestFromJSONTyped(json, false);
}
exports.CallRequestFromJSON = CallRequestFromJSON;
function CallRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        network_identifier: (0, _1.NetworkIdentifierFromJSON)(json['network_identifier']),
        method: json['method'],
        parameters: json['parameters'],
    };
}
exports.CallRequestFromJSONTyped = CallRequestFromJSONTyped;
function CallRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        network_identifier: (0, _1.NetworkIdentifierToJSON)(value.network_identifier),
        method: value.method,
        parameters: value.parameters,
    };
}
exports.CallRequestToJSON = CallRequestToJSON;
