"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientSerialize = void 0;
class ClientSerialize {
    static transformToGetClientsDto(entity) {
        return {
            uuid: entity.getUuid(),
            cpf: entity.getCpf(),
            email: entity.getEmail(),
            name: entity.getName(),
            photo: entity.getPhoto(),
            isEnabled: entity.getIsEnabled()
        };
    }
    static transformManyToGetClientsDto(entities) {
        return entities.map(ClientSerialize.transformToGetClientsDto);
    }
}
exports.ClientSerialize = ClientSerialize;
//# sourceMappingURL=client.serialize.js.map