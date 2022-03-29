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
exports.MempoolResponseToJSON = exports.MempoolResponseFromJSONTyped = exports.MempoolResponseFromJSON = void 0;
const _1 = require("./");
function MempoolResponseFromJSON(json) {
    return MempoolResponseFromJSONTyped(json, false);
}
exports.MempoolResponseFromJSON = MempoolResponseFromJSON;
function MempoolResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        transaction_identifiers: json['transaction_identifiers'].map(_1.TransactionIdentifierFromJSON),
    };
}
exports.MempoolResponseFromJSONTyped = MempoolResponseFromJSONTyped;
function MempoolResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        transaction_identifiers: value.transaction_identifiers.map(_1.TransactionIdentifierToJSON),
    };
}
exports.MempoolResponseToJSON = MempoolResponseToJSON;
