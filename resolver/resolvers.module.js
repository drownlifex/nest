"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResolversGlobal = void 0;
const name_module_1 = require("./../resolver/name/name.module");
const common_1 = require("@nestjs/common");
const id_module_1 = require("./id/id.module");
let ResolversGlobal = class ResolversGlobal {
};
ResolversGlobal = __decorate([
    common_1.Module({
        imports: [
            name_module_1.Name,
            id_module_1.Id
        ]
    })
], ResolversGlobal);
exports.ResolversGlobal = ResolversGlobal;
//# sourceMappingURL=resolvers.module.js.map