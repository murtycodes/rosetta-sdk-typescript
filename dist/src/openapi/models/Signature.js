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
exports.SignatureToJSON = exports.SignatureFromJSONTyped = exports.SignatureFromJSON = void 0;
const _1 = require("./");
function SignatureFromJSON(json) {
    return SignatureFromJSONTyped(json, false);
}
exports.SignatureFromJSON = SignatureFromJSON;
function SignatureFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        signing_payload: (0, _1.SigningPayloadFromJSON)(json['signing_payload']),
        public_key: (0, _1.PublicKeyFromJSON)(json['public_key']),
        signature_type: (0, _1.SignatureTypeFromJSON)(json['signature_type']),
        hex_bytes: json['hex_bytes'],
    };
}
exports.SignatureFromJSONTyped = SignatureFromJSONTyped;
function SignatureToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        signing_payload: (0, _1.SigningPayloadToJSON)(value.signing_payload),
        public_key: (0, _1.PublicKeyToJSON)(value.public_key),
        signature_type: (0, _1.SignatureTypeToJSON)(value.signature_type),
        hex_bytes: value.hex_bytes,
    };
}
exports.SignatureToJSON = SignatureToJSON;
