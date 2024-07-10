"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetClientByUuid = void 0;
const client_serialize_1 = require("../serializers/client.serialize");
const bad_request_exception_1 = require("../shared/exceptions/bad-request.exception");
const not_found_exception_1 = require("../shared/exceptions/not-found.exception");
const is_uuid_utils_1 = require("../shared/utils/is-uuid.utils");
class GetClientByUuid {
    constructor(clientRepository) {
        this.clientRepository = clientRepository;
    }
    async execute(uuid) {
        const valid = (0, is_uuid_utils_1.IS_VALID_UUID)(uuid);
        const { transformToGetClientsDto } = client_serialize_1.ClientSerialize;
        if (!valid) {
            throw new bad_request_exception_1.BadRequestException();
        }
        const data = await this.clientRepository.findByUUID(uuid);
        if (!data) {
            throw new not_found_exception_1.NotFoundException();
        }
        return transformToGetClientsDto(data);
    }
}
exports.GetClientByUuid = GetClientByUuid;
//# sourceMappingURL=get-client-by-uuid.usecase.js.map