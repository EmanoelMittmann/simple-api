"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INTERNAL_SERVER_ERROR = void 0;
const INTERNAL_SERVER_ERROR = (message) => {
    return {
        code: 500,
        name: 'Internal Server Error',
        message
    };
};
exports.INTERNAL_SERVER_ERROR = INTERNAL_SERVER_ERROR;
//# sourceMappingURL=internal-server-error.exception.js.map