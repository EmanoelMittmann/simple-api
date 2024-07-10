import { GetClientsDto } from "../dtos";
import { ClientEntity } from "../entities/client.entity";

export class ClientSerialize {
    static transformToGetClientsDto(entity: ClientEntity): GetClientsDto {
        return {
            uuid: entity.getUuid(),
            cpf: entity.getCpf(),
            email: entity.getEmail(),
            name: entity.getName(),
            photo: entity.getPhoto(),
            isEnabled: entity.getIsEnabled()
        };
    }

    static transformManyToGetClientsDto(entities: ClientEntity[]): GetClientsDto[]{
        return entities.map(ClientSerialize.transformToGetClientsDto);
    }

}