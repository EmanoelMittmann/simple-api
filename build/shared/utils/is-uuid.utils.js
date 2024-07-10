"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IS_VALID_UUID = IS_VALID_UUID;
const IS_HEXADECIMAL = (ch) => "0123456789abcdef".includes(ch.toLocaleLowerCase());
function IS_VALID_UUID(uuid) {
    const regexExp = new RegExp(/[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);
    return regexExp.test(uuid);
}
//# sourceMappingURL=is-uuid.utils.js.map