import { Express } from 'express';
import { ApiServiceFactory } from './';
/**
 * Params that allow you running the Rosetta server. The only require param is apiServiceFactory.
 */
export interface RosettaServerParams {
    apiServiceFactory: ApiServiceFactory;
    openApiValidateRequests: boolean;
    openApiValidateResponses: boolean;
    openApiServeDocs: boolean;
    openApiServeSpec: boolean;
    welcomeMessage: string;
    ignorePaths: string[];
    appSetupCallback: (app: Express) => void;
}
export declare const apiSpec: string;
/**
 * Main class of this SDK. A Rosetta implementation should initialize this object and start the server.
 *
 */
export declare class RosettaServer {
    private readonly params;
    static ROSETTA_API_VERSION: string;
    private openApiRouterResolver;
    private app;
    private server;
    constructor(params: {
        apiServiceFactory: ApiServiceFactory;
    } & Partial<RosettaServerParams>);
    start(port: number): Promise<void>;
    stop(): Promise<void>;
}
//# sourceMappingURL=RosettaServer.d.ts.map