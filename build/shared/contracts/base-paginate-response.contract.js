"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginateBaseResponse = void 0;
class PaginateBaseResponse {
    constructor(input) {
        this.page = input.page,
            this.size = input.size,
            this.total = input.total,
            this.lastPage = input.lastPage,
            this.data = input.data;
    }
}
exports.PaginateBaseResponse = PaginateBaseResponse;
//# sourceMappingURL=base-paginate-response.contract.js.map