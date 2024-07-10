"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientController = void 0;
const get_all_clients_usecase_1 = require("../usecases/get-all-clients.usecase");
const repository_factory_1 = require("../factories/repository.factory");
const get_client_by_uuid_usecase_1 = require("../usecases/get-client-by-uuid.usecase");
class ClientController {
    async getClients(req, res) {
        const { page, size } = req.query;
        const usecase = new get_all_clients_usecase_1.GetAllClientsUseCase(repository_factory_1.ClientRepositoryInstance);
        const data = await usecase.execute({
            page: Number(page) || 1,
            size: Number(size) || 10,
        });
        return data;
    }
    async getClientById(req, res) {
        const { id } = req.params;
        const usecase = new get_client_by_uuid_usecase_1.GetClientByUuid(repository_factory_1.ClientRepositoryInstance);
        const data = await usecase.execute(id);
        return data;
    }
}
exports.ClientController = ClientController;
//# sourceMappingURL=clients.controllers.js.map