"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiControllerFactoryImpl = void 0;
const openapi_1 = require("../openapi");
/**
 * Default implementation of the ApiControllerFactory.
 *
 * The implementation uses
 */
class ApiControllerFactoryImpl {
    constructor(apiServiceFactory) {
        this.apiServiceFactory = apiServiceFactory;
    }
    account() {
        return new openapi_1.AccountApiController(this.apiServiceFactory.account());
    }
    block() {
        return new openapi_1.BlockApiController(this.apiServiceFactory.block());
    }
    call() {
        return new openapi_1.CallApiController(this.apiServiceFactory.call());
    }
    construction() {
        return new openapi_1.ConstructionApiController(this.apiServiceFactory.construction());
    }
    events() {
        return new openapi_1.EventsApiController(this.apiServiceFactory.events());
    }
    mempool() {
        return new openapi_1.MempoolApiController(this.apiServiceFactory.mempool());
    }
    network() {
        return new openapi_1.NetworkApiController(this.apiServiceFactory.network());
    }
    search() {
        return new openapi_1.SearchApiController(this.apiServiceFactory.search());
    }
}
exports.ApiControllerFactoryImpl = ApiControllerFactoryImpl;
