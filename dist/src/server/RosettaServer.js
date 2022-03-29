"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosettaServer = exports.apiSpec = void 0;
const express_1 = __importDefault(require("express"));
const OpenApiValidator = __importStar(require("express-openapi-validator"));
const path_1 = require("path");
const swagger = __importStar(require("swagger-ui-express"));
const filesystem_1 = require("tsconfig-paths/lib/filesystem");
const api_json_1 = __importDefault(require("../../api.json"));
const _1 = require("./");
/**
 * Default rosetta server params.
 */
const defaultServerParams = {
    openApiValidateRequests: true,
    openApiValidateResponses: true,
    openApiServeDocs: true,
    openApiServeSpec: true,
    welcomeMessage: 'Welcome to the Rosetta Server',
    ignorePaths: ['/robots.txt'],
};
exports.apiSpec = (0, path_1.join)(__dirname, '../../api.json');
if (!(0, filesystem_1.fileExistsSync)(exports.apiSpec)) {
    throw new Error(`${exports.apiSpec} does not exist!`);
}
/**
 * Main class of this SDK. A Rosetta implementation should initialize this object and start the server.
 *
 */
class RosettaServer {
    constructor(params) {
        var _a;
        this.params = params;
        const resolvedParams = Object.assign(Object.assign({}, defaultServerParams), params);
        if (!resolvedParams.apiServiceFactory) {
            throw new Error('apiServiceFactory must be provided!!');
        }
        this.openApiRouterResolver = new _1.OpenApiRouterResolver(new _1.ApiControllerFactoryImpl(resolvedParams.apiServiceFactory));
        const app = (0, express_1.default)();
        (_a = resolvedParams.appSetupCallback) === null || _a === void 0 ? void 0 : _a.call(resolvedParams, app);
        app.use(express_1.default.json());
        app.use(express_1.default.urlencoded({ extended: false }));
        app.get('/', (req, res) => res.send(resolvedParams.welcomeMessage));
        if (resolvedParams.openApiServeSpec)
            app.get('/openapi', (req, res) => res.json(api_json_1.default));
        if (resolvedParams.openApiServeDocs)
            app.use('/api-docs', swagger.serve, swagger.setup(api_json_1.default));
        app.use(_1.ServerUtils.errorHandler());
        app.use(OpenApiValidator.middleware({
            operationHandlers: {
                basePath: __dirname,
                resolver: (modulePath, route) => {
                    return this.openApiRouterResolver.resolver(route);
                },
            },
            ignorePaths: (path) => {
                var _a;
                return (_a = resolvedParams.ignorePaths) === null || _a === void 0 ? void 0 : _a.includes(path);
            },
            apiSpec: exports.apiSpec,
            validateRequests: resolvedParams.openApiValidateRequests,
            validateResponses: resolvedParams.openApiValidateResponses,
        }));
        this.app = app;
    }
    start(port) {
        if (this.server) {
            throw new Error('Server has already started!!!');
        }
        return new Promise((resolve) => {
            this.server = this.app.listen({ port: port }, () => {
                console.log(`🚀 Rosetta server ready and listening at ==> http://localhost:${port}`);
                resolve();
            });
        });
    }
    stop() {
        if (!this.server) {
            return Promise.resolve();
        }
        return new Promise((resolve) => {
            var _a;
            (_a = this.server) === null || _a === void 0 ? void 0 : _a.close(() => {
                this.server = undefined;
                resolve();
            });
        });
    }
}
exports.RosettaServer = RosettaServer;
// The Rosetta api this SDK supports.
RosettaServer.ROSETTA_API_VERSION = api_json_1.default.info.version;
