import { ClientEntity } from "../entities/client.entity";
import { ClientRepository } from "../shared/contracts/client-repository.contract";
import { database } from "../factories/database.factory";
import { DatabaseSerialize } from "../serializers/database.serialize";

export class ClientPostgresRepository implements ClientRepository {
  async findAll({
    page,
    size,
  }: {
    page: number;
    size: number;
  }): Promise<ClientEntity[]> {
    const skip = (page - 1) * size;
    const { transfromManyToEntityClient } = DatabaseSerialize;

    try {
      await database.connect();
      const data = await database.query(
        "SELECT c.uuid, c.email, c.cpf, c.name, c.photo, c.is_enabled FROM clients as c OFFSET $1 LIMIT $2",
        [skip, size]
      );

      return transfromManyToEntityClient(data.rows);
    } catch (error) {

      throw new Error(String(error))
    }

  }

  async count(): Promise<number> {
    try {
      await database.connect();

      const count = await database.query("SELECT COUNT(*) from clients")

      return Number(count.rows[0].count) ?? 0

    } catch (error) {
        throw new Error(String(error))
    }
  }

  async findByUUID(uuid: string): Promise<ClientEntity | null> {
    const { transfromToEntityClient } = DatabaseSerialize;
    try {
      await database.connect()

      const client = await database.query("SELECT c.uuid, c.email, c.cpf, c.name, c.photo, c.is_enabled FROM clients as c WHERE c.uuid = $1", [uuid])

      if(client.rows.length === 0) {
        return null
      }

      return transfromToEntityClient(client.rows[0])
    } catch (error) {
        throw new Error("Some Error")
    }
  }
}
