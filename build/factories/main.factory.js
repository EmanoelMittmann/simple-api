"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainFactory = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const router_factory_1 = require("./router.factory");
class MainFactory {
    constructor(initialInput) {
        this.initialInput = initialInput;
    }
    async Init_application() {
        const { cors, port } = this.initialInput;
        const app = (0, express_1.default)();
        if (cors) {
            app.options('*', (0, cors_1.default)());
        }
        app.use(express_1.default.json());
        app.get('/', (req, res) => {
            res.setHeader('Content-Type', 'application/json');
            res.send('HELLO!');
        });
        app.listen(port, () => {
            console.info("[simple-api] : Running in port " + port);
        });
        return app.use(router_factory_1.ROUTES);
    }
}
exports.MainFactory = MainFactory;
//# sourceMappingURL=main.factory.js.map