"use strict";
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
exports.OpenApiRouterResolver = void 0;
const ServerUtils_1 = require("./ServerUtils");
/**
 *
 * It handles the Rosetta specific requests delegating the request to the right api controller method.
 */
class OpenApiRouterResolver {
    constructor(apiControllerFactory) {
        this.apiControllerFactory = apiControllerFactory;
    }
    static camelize(str) {
        return str
            .trim()
            .replace(/^\w|[A-Z]|\b\w/g, function (word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        })
            .replace(/\s+/g, '');
    }
    resolver(route) {
        const { serviceMethodName, serviceClassName, method } = this.resolveServiceMethod(route.openApiRoute);
        return ServerUtils_1.ServerUtils.asyncMiddleware((req) => __awaiter(this, void 0, void 0, function* () {
            const response = yield method(req);
            if (!response) {
                throw new Error(`Response is required. Have you implemented ${serviceClassName}.${serviceMethodName}()?`);
            }
            return response;
        }));
    }
    resolveServiceMethod(openApiRoute) {
        const { serviceName, serviceMethodName } = OpenApiRouterResolver.resolveServiceAndMethodNames(openApiRoute);
        const serviceFactoryName = this.apiControllerFactory.constructor.name;
        const factoryMethod = this.apiControllerFactory[serviceName].bind(this.apiControllerFactory);
        if (!factoryMethod) {
            throw new Error(`There is no factory method name ${serviceName}. Have you implemented ${serviceFactoryName}.${serviceName}`);
        }
        const service = factoryMethod();
        if (!service) {
            throw new Error(`There is no service method name ${serviceName}. Is ${serviceFactoryName}.${serviceName} returning an ${serviceName}ApiService implementation?`);
        }
        const method = service[serviceMethodName].bind(service);
        return { serviceMethodName: serviceMethodName, serviceClassName: service.constructor.name, method };
    }
    static resolveServiceAndMethodNames(openApiRoute) {
        const serviceSplit = openApiRoute.split('/').join(' ').trim();
        const serviceName = serviceSplit.split(' ')[0];
        const serviceMethodName = OpenApiRouterResolver.camelize(serviceSplit);
        return { serviceName, serviceMethodName };
    }
}
exports.OpenApiRouterResolver = OpenApiRouterResolver;
