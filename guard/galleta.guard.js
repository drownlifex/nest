"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalletaGuard = void 0;
const common_1 = require("@nestjs/common");
let GalletaGuard = class GalletaGuard {
    canActivate(context) {
        const header = context.getArgByIndex(2)["req"];
        if (context.getArgByIndex(1).name === "JACK") {
            context.getArgByIndex(1).name = `${context.getArgByIndex(1).name} @Esto es una galleta`;
            return true;
        }
        return false;
    }
};
GalletaGuard = __decorate([
    common_1.Injectable()
], GalletaGuard);
exports.GalletaGuard = GalletaGuard;
//# sourceMappingURL=galleta.guard.js.map