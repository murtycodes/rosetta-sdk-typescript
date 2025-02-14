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
exports.AccountCoinsResponseToJSON = exports.AccountCoinsResponseFromJSONTyped = exports.AccountCoinsResponseFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function AccountCoinsResponseFromJSON(json) {
    return AccountCoinsResponseFromJSONTyped(json, false);
}
exports.AccountCoinsResponseFromJSON = AccountCoinsResponseFromJSON;
function AccountCoinsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        block_identifier: (0, _1.BlockIdentifierFromJSON)(json['block_identifier']),
        coins: json['coins'].map(_1.CoinFromJSON),
        metadata: !(0, runtime_1.exists)(json, 'metadata') ? undefined : json['metadata'],
    };
}
exports.AccountCoinsResponseFromJSONTyped = AccountCoinsResponseFromJSONTyped;
function AccountCoinsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        block_identifier: (0, _1.BlockIdentifierToJSON)(value.block_identifier),
        coins: value.coins.map(_1.CoinToJSON),
        metadata: value.metadata,
    };
}
exports.AccountCoinsResponseToJSON = AccountCoinsResponseToJSON;
