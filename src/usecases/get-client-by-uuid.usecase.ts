import { ClientSerialize } from "../serializers/client.serialize";
import { IBaseUseCaseContract } from "../shared/contracts/base-contract.usecase.contract";
import { ClientRepository } from "../shared/contracts/client-repository.contract";
import { BadRequestException } from "../shared/exceptions/bad-request.exception";
import { NotFoundException } from "../shared/exceptions/not-found.exception";
import { HTTPStatusCode } from "../shared/https-codes";
import { IS_VALID_UUID } from "../shared/utils/is-uuid.utils";

export class GetClientByUuid implements IBaseUseCaseContract {
    constructor(
        private readonly clientRepository: ClientRepository
    ){}

    async execute(uuid: string) {
        const valid = IS_VALID_UUID(uuid)

        const {transformToGetClientsDto} = ClientSerialize

        if(!valid){
            throw new BadRequestException()
        }

        const data = await this.clientRepository.findByUUID(uuid);

        if(!data) {
            throw new NotFoundException()
        }

        return transformToGetClientsDto(data)
    }
}