import { Request, RequestHandler } from 'express';
import { ApiControllerFactory } from './ApiControllerFactory';
/**
 * Information provided by the open api validator when resolving the router.
 */
export interface OpenApiRoute {
    basePath: string;
    expressRoute: string;
    openApiRoute: string;
    method: string;
    pathParams: unknown[];
}
/**
 *
 * It handles the Rosetta specific requests delegating the request to the right api controller method.
 */
export declare class OpenApiRouterResolver {
    private readonly apiControllerFactory;
    constructor(apiControllerFactory: ApiControllerFactory);
    static camelize(str: string): string;
    resolver(route: OpenApiRoute): RequestHandler;
    resolveServiceMethod(openApiRoute: string): {
        serviceMethodName: string;
        serviceClassName: string;
        method: (req: Request) => Promise<unknown>;
    };
    static resolveServiceAndMethodNames(openApiRoute: string): {
        serviceName: string;
        serviceMethodName: string;
    };
}
//# sourceMappingURL=OpenApiRouterResolver.d.ts.map