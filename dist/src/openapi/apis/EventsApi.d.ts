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
import { EventsBlocksRequest, EventsBlocksResponse } from '../models';
import * as runtime from '../runtime';
export interface EventsBlocksOperationRequest {
    eventsBlocksRequest: EventsBlocksRequest;
}
/**
 * EventsApi - controller interface for the server side implementation.
 *
 * @export
 * @interface EventsApiController
 */
export declare class EventsApiController<Req extends {
    body: any;
} = {
    body: any;
}> {
    private readonly service;
    /**
     *
     * @param service - The service that implements
     */
    constructor(service: EventsApiService);
    /**
     * `/events/blocks` allows the caller to query a sequence of BlockEvents indicating which blocks were added and removed from storage to reach the current state. Following BlockEvents allows lightweight clients to update their state without needing to implement their own syncing logic (like finding the common parent in a reorg). `/events/blocks` is considered an \"indexer\" endpoint and Rosetta implementations are not required to complete it to adhere to the Rosetta spec. However, any Rosetta \"indexer\" MUST support this endpoint.
     * [INDEXER] Get a range of BlockEvents
     *
     *  @param req - The request object, where the body is a EventsBlocksRequest
     */
    eventsBlocks(req: Req): Promise<any>;
}
/**
 * EventsApi - service interface for the server side implementation.
 *
 *
 * @export
 * @interface EventsApiService
 */
export interface EventsApiService {
    /**
     * `/events/blocks` allows the caller to query a sequence of BlockEvents indicating which blocks were added and removed from storage to reach the current state. Following BlockEvents allows lightweight clients to update their state without needing to implement their own syncing logic (like finding the common parent in a reorg). `/events/blocks` is considered an \"indexer\" endpoint and Rosetta implementations are not required to complete it to adhere to the Rosetta spec. However, any Rosetta \"indexer\" MUST support this endpoint.
     * [INDEXER] Get a range of BlockEvents
     *
     * requestParameters - the body of the RPC style request.
     */
    eventsBlocks(requestParameters: EventsBlocksRequest): Promise<EventsBlocksResponse>;
}
/**
 * EventsApi - interface
 *
 * @export
 * @interface EventsApiInterface
 */
export interface EventsApiInterface {
    /**
     * `/events/blocks` allows the caller to query a sequence of BlockEvents indicating which blocks were added and removed from storage to reach the current state. Following BlockEvents allows lightweight clients to update their state without needing to implement their own syncing logic (like finding the common parent in a reorg). `/events/blocks` is considered an \"indexer\" endpoint and Rosetta implementations are not required to complete it to adhere to the Rosetta spec. However, any Rosetta \"indexer\" MUST support this endpoint.
     * @summary [INDEXER] Get a range of BlockEvents
     * @param {EventsBlocksRequest} eventsBlocksRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApiInterface
     */
    eventsBlocksRaw(requestParameters: EventsBlocksOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<EventsBlocksResponse>>;
    /**
     * `/events/blocks` allows the caller to query a sequence of BlockEvents indicating which blocks were added and removed from storage to reach the current state. Following BlockEvents allows lightweight clients to update their state without needing to implement their own syncing logic (like finding the common parent in a reorg). `/events/blocks` is considered an \"indexer\" endpoint and Rosetta implementations are not required to complete it to adhere to the Rosetta spec. However, any Rosetta \"indexer\" MUST support this endpoint.
     * [INDEXER] Get a range of BlockEvents
     */
    eventsBlocks(requestParameters: EventsBlocksOperationRequest, initOverrides?: RequestInit): Promise<EventsBlocksResponse>;
}
/**
 *
 */
export declare class EventsApi extends runtime.BaseAPI implements EventsApiInterface {
    /**
     * `/events/blocks` allows the caller to query a sequence of BlockEvents indicating which blocks were added and removed from storage to reach the current state. Following BlockEvents allows lightweight clients to update their state without needing to implement their own syncing logic (like finding the common parent in a reorg). `/events/blocks` is considered an \"indexer\" endpoint and Rosetta implementations are not required to complete it to adhere to the Rosetta spec. However, any Rosetta \"indexer\" MUST support this endpoint.
     * [INDEXER] Get a range of BlockEvents
     */
    eventsBlocksRaw(requestParameters: EventsBlocksOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<EventsBlocksResponse>>;
    /**
     * `/events/blocks` allows the caller to query a sequence of BlockEvents indicating which blocks were added and removed from storage to reach the current state. Following BlockEvents allows lightweight clients to update their state without needing to implement their own syncing logic (like finding the common parent in a reorg). `/events/blocks` is considered an \"indexer\" endpoint and Rosetta implementations are not required to complete it to adhere to the Rosetta spec. However, any Rosetta \"indexer\" MUST support this endpoint.
     * [INDEXER] Get a range of BlockEvents
     */
    eventsBlocks(requestParameters: EventsBlocksOperationRequest, initOverrides?: RequestInit): Promise<EventsBlocksResponse>;
}
//# sourceMappingURL=EventsApi.d.ts.map