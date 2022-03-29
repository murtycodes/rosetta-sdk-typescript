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
exports.ConstructionParseResponseToJSON = exports.ConstructionParseResponseFromJSONTyped = exports.ConstructionParseResponseFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function ConstructionParseResponseFromJSON(json) {
    return ConstructionParseResponseFromJSONTyped(json, false);
}
exports.ConstructionParseResponseFromJSON = ConstructionParseResponseFromJSON;
function ConstructionParseResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        operations: json['operations'].map(_1.OperationFromJSON),
        signers: !(0, runtime_1.exists)(json, 'signers') ? undefined : json['signers'],
        account_identifier_signers: !(0, runtime_1.exists)(json, 'account_identifier_signers')
            ? undefined
            : json['account_identifier_signers'].map(_1.AccountIdentifierFromJSON),
        metadata: !(0, runtime_1.exists)(json, 'metadata') ? undefined : json['metadata'],
    };
}
exports.ConstructionParseResponseFromJSONTyped = ConstructionParseResponseFromJSONTyped;
function ConstructionParseResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        operations: value.operations.map(_1.OperationToJSON),
        signers: value.signers,
        account_identifier_signers: value.account_identifier_signers === undefined
            ? undefined
            : value.account_identifier_signers.map(_1.AccountIdentifierToJSON),
        metadata: value.metadata,
    };
}
exports.ConstructionParseResponseToJSON = ConstructionParseResponseToJSON;
