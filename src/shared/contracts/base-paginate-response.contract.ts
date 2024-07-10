export class PaginateBaseResponse<T>{
    page: number;
    size: number;
    total: number;
    lastPage: number
    data: T[]
    
    constructor(input: PaginateBaseResponse<T>){
        this.page = input.page,
        this.size = input.size,
        this.total = input.total,
        this.lastPage = input.lastPage,
        this.data = input.data
    }
}