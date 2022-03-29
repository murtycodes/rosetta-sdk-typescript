import { AccountApiController, BlockApiController, CallApiController, ConstructionApiController, EventsApiController, MempoolApiController, NetworkApiController, SearchApiController } from '../openapi';
import { ApiServiceFactory } from './ApiServiceFactory';
export interface ApiControllerFactory {
    account(): AccountApiController;
    block(): BlockApiController;
    events(): EventsApiController;
    construction(): ConstructionApiController;
    call(): CallApiController;
    mempool(): MempoolApiController;
    network(): NetworkApiController;
    search(): SearchApiController;
}
/**
 * Default implementation of the ApiControllerFactory.
 *
 * The implementation uses
 */
export declare class ApiControllerFactoryImpl implements ApiControllerFactory {
    private readonly apiServiceFactory;
    constructor(apiServiceFactory: ApiServiceFactory);
    account(): AccountApiController;
    block(): BlockApiController;
    call(): CallApiController;
    construction(): ConstructionApiController;
    events(): EventsApiController;
    mempool(): MempoolApiController;
    network(): NetworkApiController;
    search(): SearchApiController;
}
//# sourceMappingURL=ApiControllerFactory.d.ts.map