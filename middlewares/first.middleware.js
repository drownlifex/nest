"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirstMiddleware = void 0;
const common_1 = require("@nestjs/common");
const redis = require("redis");
let FirstMiddleware = class FirstMiddleware {
    use(req, res, next) {
        const client = redis.createClient();
        client.on("connect", function () {
            console.log("You are now connected");
        });
        const existInRedis = (clave, value) => {
            let temp = false;
            client.get(clave, function (err, reply) {
                if (reply === value) {
                    temp = true;
                }
            });
            return temp;
        };
        if (req.url !== "/") {
            res.send("KeKieresAserPrrrrrO ╭∩╮（︶_︶）╭∩╮");
        }
        else {
            console.log(req.headers["token"]);
            next();
        }
    }
};
FirstMiddleware = __decorate([
    common_1.Injectable()
], FirstMiddleware);
exports.FirstMiddleware = FirstMiddleware;
//# sourceMappingURL=first.middleware.js.map