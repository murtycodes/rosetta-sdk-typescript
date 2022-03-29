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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MempoolApi = exports.MempoolApiController = void 0;
const models_1 = require("../models");
const runtime = __importStar(require("../runtime"));
/**
 * MempoolApi - controller interface for the server side implementation.
 *
 * @export
 * @interface MempoolApiController
 */
class MempoolApiController {
    /**
     *
     * @param service - The service that implements
     */
    constructor(service) {
        this.service = service;
    }
    /**
     * Get all Transaction Identifiers in the mempool
     * Get All Mempool Transactions
     *
     *  @param req - The request object, where the body is a NetworkRequest
     */
    mempool(req) {
        return this.service.mempool((0, models_1.NetworkRequestFromJSON)(req.body)).then(models_1.MempoolResponseToJSON);
    }
    /**
     * Get a transaction in the mempool by its Transaction Identifier. This is a separate request than fetching a block transaction (/block/transaction) because some blockchain nodes need to know that a transaction query is for something in the mempool instead of a transaction in a block. Transactions may not be fully parsable until they are in a block (ex: may not be possible to determine the fee to pay before a transaction is executed). On this endpoint, it is ok that returned transactions are only estimates of what may actually be included in a block.
     * Get a Mempool Transaction
     *
     *  @param req - The request object, where the body is a MempoolTransactionRequest
     */
    mempoolTransaction(req) {
        return this.service.mempoolTransaction((0, models_1.MempoolTransactionRequestFromJSON)(req.body)).then(models_1.MempoolTransactionResponseToJSON);
    }
}
exports.MempoolApiController = MempoolApiController;
/**
 *
 */
class MempoolApi extends runtime.BaseAPI {
    /**
     * Get all Transaction Identifiers in the mempool
     * Get All Mempool Transactions
     */
    mempoolRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.networkRequest === null || requestParameters.networkRequest === undefined) {
                throw new runtime.RequiredError('networkRequest', 'Required parameter requestParameters.networkRequest was null or undefined when calling mempool.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/mempool`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.NetworkRequestToJSON)(requestParameters.networkRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.MempoolResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Get all Transaction Identifiers in the mempool
     * Get All Mempool Transactions
     */
    mempool(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.mempoolRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get a transaction in the mempool by its Transaction Identifier. This is a separate request than fetching a block transaction (/block/transaction) because some blockchain nodes need to know that a transaction query is for something in the mempool instead of a transaction in a block. Transactions may not be fully parsable until they are in a block (ex: may not be possible to determine the fee to pay before a transaction is executed). On this endpoint, it is ok that returned transactions are only estimates of what may actually be included in a block.
     * Get a Mempool Transaction
     */
    mempoolTransactionRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.mempoolTransactionRequest === null || requestParameters.mempoolTransactionRequest === undefined) {
                throw new runtime.RequiredError('mempoolTransactionRequest', 'Required parameter requestParameters.mempoolTransactionRequest was null or undefined when calling mempoolTransaction.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/mempool/transaction`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.MempoolTransactionRequestToJSON)(requestParameters.mempoolTransactionRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.MempoolTransactionResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Get a transaction in the mempool by its Transaction Identifier. This is a separate request than fetching a block transaction (/block/transaction) because some blockchain nodes need to know that a transaction query is for something in the mempool instead of a transaction in a block. Transactions may not be fully parsable until they are in a block (ex: may not be possible to determine the fee to pay before a transaction is executed). On this endpoint, it is ok that returned transactions are only estimates of what may actually be included in a block.
     * Get a Mempool Transaction
     */
    mempoolTransaction(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.mempoolTransactionRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.MempoolApi = MempoolApi;
