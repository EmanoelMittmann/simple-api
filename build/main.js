"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_factory_1 = require("./factories/main.factory");
const main = new main_factory_1.MainFactory({
    port: 3000,
    cors: true
});
main.Init_application();
//# sourceMappingURL=main.js.map  