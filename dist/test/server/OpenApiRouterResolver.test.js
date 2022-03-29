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
const chai_1 = require("chai");
require("mocha");
const src_1 = require("../../src");
describe('OpenApiRouterResolver Tests', () => {
    it('camelize', () => __awaiter(void 0, void 0, void 0, function* () {
        (0, chai_1.expect)(src_1.OpenApiRouterResolver.camelize('/account/network')).eq('/Account/Network');
        (0, chai_1.expect)(src_1.OpenApiRouterResolver.camelize(' account network')).eq('accountNetwork');
        (0, chai_1.expect)(src_1.OpenApiRouterResolver.camelize('account network')).eq('accountNetwork');
        (0, chai_1.expect)(src_1.OpenApiRouterResolver.camelize('Account Network')).eq('accountNetwork');
    }));
    it('resolveServiceAndMethodNames', () => __awaiter(void 0, void 0, void 0, function* () {
        (0, chai_1.expect)(src_1.OpenApiRouterResolver.resolveServiceAndMethodNames('/network/list')).deep.eq({
            serviceName: 'network',
            serviceMethodName: 'networkList',
        });
    }));
});
