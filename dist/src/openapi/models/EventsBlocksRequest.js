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
exports.EventsBlocksRequestToJSON = exports.EventsBlocksRequestFromJSONTyped = exports.EventsBlocksRequestFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function EventsBlocksRequestFromJSON(json) {
    return EventsBlocksRequestFromJSONTyped(json, false);
}
exports.EventsBlocksRequestFromJSON = EventsBlocksRequestFromJSON;
function EventsBlocksRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        network_identifier: (0, _1.NetworkIdentifierFromJSON)(json['network_identifier']),
        offset: !(0, runtime_1.exists)(json, 'offset') ? undefined : json['offset'],
        limit: !(0, runtime_1.exists)(json, 'limit') ? undefined : json['limit'],
    };
}
exports.EventsBlocksRequestFromJSONTyped = EventsBlocksRequestFromJSONTyped;
function EventsBlocksRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        network_identifier: (0, _1.NetworkIdentifierToJSON)(value.network_identifier),
        offset: value.offset,
        limit: value.limit,
    };
}
exports.EventsBlocksRequestToJSON = EventsBlocksRequestToJSON;
