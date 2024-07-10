import { ClientEntity } from "../entities/client.entity";

export interface IRawClient {
  uuid: string;
  email: string;
  cpf: string;
  name: string;
  photo: string;
  is_enabled: boolean;
}

export class DatabaseSerialize {
  static transfromToEntityClient(raw: IRawClient): ClientEntity {
    const entity = new ClientEntity

    entity.setUuid(raw.uuid)
    entity.setName(raw.name)
    entity.setCpf(raw.cpf)
    entity.setEmail(raw.email)
    entity.setPhoto(raw.photo)
    entity.setIsEnabled(raw.is_enabled)

    return entity
  }

  static transfromManyToEntityClient(raw: IRawClient[]): ClientEntity[] {
    return raw.map(DatabaseSerialize.transfromToEntityClient)
  }
}
