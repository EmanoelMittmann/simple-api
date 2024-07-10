"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundException = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const https_codes_1 = require("../https-codes");
class NotFoundException {
    constructor(message = 'Not Found') {
        throw (0, http_errors_1.default)(https_codes_1.HTTPStatusCode.NotFound, message);
    }
}
exports.NotFoundException = NotFoundException;
//# sourceMappingURL=not-found.exception.js.map