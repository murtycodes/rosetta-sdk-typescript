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
exports.PeerToJSON = exports.PeerFromJSONTyped = exports.PeerFromJSON = void 0;
const runtime_1 = require("../runtime");
function PeerFromJSON(json) {
    return PeerFromJSONTyped(json, false);
}
exports.PeerFromJSON = PeerFromJSON;
function PeerFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        peer_id: json['peer_id'],
        metadata: !(0, runtime_1.exists)(json, 'metadata') ? undefined : json['metadata'],
    };
}
exports.PeerFromJSONTyped = PeerFromJSONTyped;
function PeerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        peer_id: value.peer_id,
        metadata: value.metadata,
    };
}
exports.PeerToJSON = PeerToJSON;
