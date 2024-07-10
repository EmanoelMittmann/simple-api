"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROUTES = void 0;
const clients_controllers_1 = require("../controllers/clients.controllers");
const router_routes_1 = require("../shared/routes/router.routes");
Object.defineProperty(exports, "ROUTES", { enumerable: true, get: function () { return router_routes_1.ROUTES; } });
const { getClients, getClientById } = new clients_controllers_1.ClientController();
router_routes_1.ROUTES.get('/clients', async (req, res) => {
    res.status(201).send(await getClients(req, res));
    res.end();
});
router_routes_1.ROUTES.get('/client/:id', async (req, res) => {
    return res.status(201).send(await getClientById(req, res));
});
//# sourceMappingURL=router.factory.js.map