"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResolverGraphQl = void 0;
const prueba_interceptor_1 = require("./../../interceptors/prueba.interceptor");
const uppercase_pipe_1 = require("./../../pipes/uppercase.pipe");
const schema_model_1 = require("./schema.model");
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
let ResolverGraphQl = class ResolverGraphQl {
    firstFunction(id) {
        return {
            id: `Aloha ${id}`
        };
    }
};
__decorate([
    graphql_1.Query(returns => schema_model_1.SchemaGraphQl),
    __param(0, graphql_1.Args("id", new uppercase_pipe_1.UppercasePipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ResolverGraphQl.prototype, "firstFunction", null);
ResolverGraphQl = __decorate([
    graphql_1.Resolver(of => schema_model_1.SchemaGraphQl),
    common_1.UseInterceptors(new prueba_interceptor_1.PruebaInterceptor())
], ResolverGraphQl);
exports.ResolverGraphQl = ResolverGraphQl;
//# sourceMappingURL=resolver.js.map