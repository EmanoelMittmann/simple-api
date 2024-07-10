"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exceptionHandler = void 0;
const https_codes_1 = require("../shared/https-codes");
const exceptionHandler = (err, req, res, _next) => {
    console.log('cheguei aqui');
    const statusCode = err.statusCode || https_codes_1.HTTPStatusCode.InternalServerError;
    const message = err.message || 'Internal Server Error';
    if (statusCode === https_codes_1.HTTPStatusCode.Ok) {
        _next();
    }
    return res.status(statusCode).send({ statusCode, message });
};
exports.exceptionHandler = exceptionHandler;
//# sourceMappingURL=global-exception.middleware.js.map