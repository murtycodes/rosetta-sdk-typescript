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
exports.AccountBalanceRequestToJSON = exports.AccountBalanceRequestFromJSONTyped = exports.AccountBalanceRequestFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function AccountBalanceRequestFromJSON(json) {
    return AccountBalanceRequestFromJSONTyped(json, false);
}
exports.AccountBalanceRequestFromJSON = AccountBalanceRequestFromJSON;
function AccountBalanceRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        network_identifier: (0, _1.NetworkIdentifierFromJSON)(json['network_identifier']),
        account_identifier: (0, _1.AccountIdentifierFromJSON)(json['account_identifier']),
        block_identifier: !(0, runtime_1.exists)(json, 'block_identifier') ? undefined : (0, _1.PartialBlockIdentifierFromJSON)(json['block_identifier']),
        currencies: !(0, runtime_1.exists)(json, 'currencies') ? undefined : json['currencies'].map(_1.CurrencyFromJSON),
    };
}
exports.AccountBalanceRequestFromJSONTyped = AccountBalanceRequestFromJSONTyped;
function AccountBalanceRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        network_identifier: (0, _1.NetworkIdentifierToJSON)(value.network_identifier),
        account_identifier: (0, _1.AccountIdentifierToJSON)(value.account_identifier),
        block_identifier: (0, _1.PartialBlockIdentifierToJSON)(value.block_identifier),
        currencies: value.currencies === undefined ? undefined : value.currencies.map(_1.CurrencyToJSON),
    };
}
exports.AccountBalanceRequestToJSON = AccountBalanceRequestToJSON;
