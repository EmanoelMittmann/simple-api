import { ClientEntity } from "../../entities/client.entity";

export interface ClientRepository {
    findAll(input: {page:number, size: number}): Promise<ClientEntity[]>
    count(): Promise<number>
    findByUUID(uuid: string): Promise<ClientEntity | null>
}