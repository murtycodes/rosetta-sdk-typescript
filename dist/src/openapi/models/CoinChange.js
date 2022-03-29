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
exports.CoinChangeToJSON = exports.CoinChangeFromJSONTyped = exports.CoinChangeFromJSON = void 0;
const _1 = require("./");
function CoinChangeFromJSON(json) {
    return CoinChangeFromJSONTyped(json, false);
}
exports.CoinChangeFromJSON = CoinChangeFromJSON;
function CoinChangeFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        coin_identifier: (0, _1.CoinIdentifierFromJSON)(json['coin_identifier']),
        coin_action: (0, _1.CoinActionFromJSON)(json['coin_action']),
    };
}
exports.CoinChangeFromJSONTyped = CoinChangeFromJSONTyped;
function CoinChangeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        coin_identifier: (0, _1.CoinIdentifierToJSON)(value.coin_identifier),
        coin_action: (0, _1.CoinActionToJSON)(value.coin_action),
    };
}
exports.CoinChangeToJSON = CoinChangeToJSON;
