"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestException = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const https_codes_1 = require("../https-codes");
class BadRequestException {
    constructor(message = 'Bad Request') {
        throw (0, http_errors_1.default)(https_codes_1.HTTPStatusCode.BadRequest, message);
    }
}
exports.BadRequestException = BadRequestException;
//# sourceMappingURL=bad-request.exception.js.map