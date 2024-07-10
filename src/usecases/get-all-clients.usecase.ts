import { GetClientsDto } from "../dtos";
import { GetClientParamsDto } from "../dtos/clients/get-clients-params.dto";
import { ClientSerialize } from "../serializers/client.serialize";
import { IBaseUseCaseContract } from "../shared/contracts/base-contract.usecase.contract";
import { PaginateBaseResponse } from "../shared/contracts/base-paginate-response.contract";
import { ClientRepository } from "../shared/contracts/client-repository.contract";

export class GetAllClientsUseCase implements IBaseUseCaseContract {
    constructor(
        private readonly clientRepository: ClientRepository
    ){}

    async execute(input: GetClientParamsDto): Promise<PaginateBaseResponse<GetClientsDto>> {
        const {page,size} = input
        const {transformManyToGetClientsDto} = ClientSerialize

        const data = await this.clientRepository.findAll({
            page: Number(page),
            size: Number(size)
        })

        const total = await this.clientRepository.count()

        const serialize = transformManyToGetClientsDto(data)

        return new PaginateBaseResponse({
            data: serialize,
            lastPage: Math.ceil(total / size),
            page,
            size,
            total,
        })
    }
}