import { Request, Response } from "express";
import { GetClientParamsDto } from "../dtos/clients/get-clients-params.dto";
import { GetClientsDto } from "../dtos/clients/get-clients.dto";
import { GetAllClientsUseCase } from "../usecases/get-all-clients.usecase";
import { PaginateBaseResponse } from "../shared/contracts/base-paginate-response.contract";
import { ClientRepositoryInstance } from "../factories/repository.factory";
import { GetClientByUuid } from "../usecases/get-client-by-uuid.usecase";

export class ClientController {
  async getClients(req: Request, res:Response): Promise<PaginateBaseResponse<GetClientsDto>> {
    const { page, size } = req.query

    const usecase = new GetAllClientsUseCase(ClientRepositoryInstance);

    const data = await usecase.execute({
      page: Number(page) || 1,
      size: Number(size) || 10,
    });

    return data
  }

  async getClientById(req: Request, res: Response): Promise<GetClientsDto> {
    const {id} = req.params

    const usecase = new GetClientByUuid(ClientRepositoryInstance)

    const data = await usecase.execute(id);

    return data
  }
}
