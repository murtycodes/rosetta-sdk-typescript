"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosettaRestClientFactory = void 0;
const cross_fetch_1 = __importDefault(require("cross-fetch"));
const __1 = require("../");
/**
 * Main class used to create Rosetta rest clients.
 *
 * These rest client would most likely be used for Rosetta e2e testing as this sdk brings server side dependencies (e.g. express) you may not want in a Rosetta client.
 *
 */
class RosettaRestClientFactory {
    /**
     * Constructor
     *
     * @param configs the config used to tune the client, including url, custom fetch implementation and middleware.
     */
    constructor(configs) {
        const fetchApi = configs.fetchApi || (typeof window !== 'undefined' && window.fetch.bind(window)) || cross_fetch_1.default;
        this.configuration = new __1.Configuration({
            basePath: configs.url,
            fetchApi: fetchApi,
            middleware: configs.middleware || [],
        });
    }
    account() {
        return new __1.AccountApi(this.configuration);
    }
    block() {
        return new __1.BlockApi(this.configuration);
    }
    events() {
        return new __1.EventsApi(this.configuration);
    }
    construction() {
        return new __1.ConstructionApi(this.configuration);
    }
    call() {
        return new __1.CallApi(this.configuration);
    }
    mempool() {
        return new __1.MempoolApi(this.configuration);
    }
    network() {
        return new __1.NetworkApi(this.configuration);
    }
    search() {
        return new __1.SearchApi(this.configuration);
    }
}
exports.RosettaRestClientFactory = RosettaRestClientFactory;
