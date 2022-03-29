import { AccountApiInterface, BlockApiInterface, CallApiInterface, ConstructionApiInterface, EventsApiInterface, FetchAPI, MempoolApiInterface, Middleware, NetworkApiInterface, SearchApiInterface } from '../';
/**
 * Params used to create a client factory.
 */
interface RestClientFactoryParams {
    /**
     * The rest url of the Rosetta service. E.g: http://localhost:8080/
     */
    url: string;
    /**
     * Optional fetch api.
     */
    fetchApi?: FetchAPI;
    /**
     * Middleware for pre/post request customizations.
     */
    middleware?: Middleware[];
}
/**
 * Main class used to create Rosetta rest clients.
 *
 * These rest client would most likely be used for Rosetta e2e testing as this sdk brings server side dependencies (e.g. express) you may not want in a Rosetta client.
 *
 */
export declare class RosettaRestClientFactory {
    private readonly configuration;
    /**
     * Constructor
     *
     * @param configs the config used to tune the client, including url, custom fetch implementation and middleware.
     */
    constructor(configs: RestClientFactoryParams);
    account(): AccountApiInterface;
    block(): BlockApiInterface;
    events(): EventsApiInterface;
    construction(): ConstructionApiInterface;
    call(): CallApiInterface;
    mempool(): MempoolApiInterface;
    network(): NetworkApiInterface;
    search(): SearchApiInterface;
}
export {};
//# sourceMappingURL=RosettaRestClientFactory.d.ts.map