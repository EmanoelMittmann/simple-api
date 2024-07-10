"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseSerialize = void 0;
const client_entity_1 = require("../entities/client.entity");
class DatabaseSerialize {
    static transfromToEntityClient(raw) {
        const entity = new client_entity_1.ClientEntity;
        entity.setUuid(raw.uuid);
        entity.setName(raw.name);
        entity.setCpf(raw.cpf);
        entity.setEmail(raw.email);
        entity.setPhoto(raw.photo);
        entity.setIsEnabled(raw.is_enabled);
        return entity;
    }
    static transfromManyToEntityClient(raw) {
        return raw.map(DatabaseSerialize.transfromToEntityClient);
    }
}
exports.DatabaseSerialize = DatabaseSerialize;
//# sourceMappingURL=database.serialize.js.map