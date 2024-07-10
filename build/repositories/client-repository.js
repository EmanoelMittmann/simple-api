"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientPostgresRepository = void 0;
const database_factory_1 = require("../factories/database.factory");
const database_serialize_1 = require("../serializers/database.serialize");
class ClientPostgresRepository {
    async findAll({ page, size, }) {
        const skip = (page - 1) * size;
        const { transfromManyToEntityClient } = database_serialize_1.DatabaseSerialize;
        try {
            await database_factory_1.database.connect();
            const data = await database_factory_1.database.query("SELECT c.uuid, c.email, c.cpf, c.name, c.photo, c.is_enabled FROM clients as c OFFSET $1 LIMIT $2", [skip, size]);
            return transfromManyToEntityClient(data.rows);
        }
        catch (error) {
            throw new Error(String(error));
        }
    }
    async count() {
        var _a;
        try {
            await database_factory_1.database.connect();
            const count = await database_factory_1.database.query("SELECT COUNT(*) from clients");
            return (_a = Number(count.rows[0].count)) !== null && _a !== void 0 ? _a : 0;
        }
        catch (error) {
            throw new Error(String(error));
        }
    }
    async findByUUID(uuid) {
        const { transfromToEntityClient } = database_serialize_1.DatabaseSerialize;
        try {
            await database_factory_1.database.connect();
            const client = await database_factory_1.database.query("SELECT c.uuid, c.email, c.cpf, c.name, c.photo, c.is_enabled FROM clients as c WHERE c.uuid = $1", [uuid]);
            if (client.rows.length === 0) {
                return null;
            }
            return transfromToEntityClient(client.rows[0]);
        }
        catch (error) {
            throw new Error("Some Error");
        }
    }
}
exports.ClientPostgresRepository = ClientPostgresRepository;
//# sourceMappingURL=client-repository.js.map