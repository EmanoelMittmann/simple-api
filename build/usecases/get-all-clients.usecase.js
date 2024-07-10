"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllClientsUseCase = void 0;
const client_serialize_1 = require("../serializers/client.serialize");
const base_paginate_response_contract_1 = require("../shared/contracts/base-paginate-response.contract");
class GetAllClientsUseCase {
    constructor(clientRepository) {
        this.clientRepository = clientRepository;
    }
    async execute(input) {
        const { page, size } = input;
        const { transformManyToGetClientsDto } = client_serialize_1.ClientSerialize;
        const data = await this.clientRepository.findAll({
            page: Number(page),
            size: Number(size)
        });
        const total = await this.clientRepository.count();
        const serialize = transformManyToGetClientsDto(data);
        return new base_paginate_response_contract_1.PaginateBaseResponse({
            data: serialize,
            lastPage: Math.ceil(total / size),
            page,
            size,
            total,
        });
    }
}
exports.GetAllClientsUseCase = GetAllClientsUseCase;
//# sourceMappingURL=get-all-clients.usecase.js.map