"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientEntity = void 0;
class ClientEntity {
    getId() {
        return this.id;
    }
    getUuid() {
        return this.uuid;
    }
    getName() {
        return this.name;
    }
    getPhoto() {
        return this.photo;
    }
    getIsEnabled() {
        return this.isEnabled;
    }
    getEmail() {
        return this.email;
    }
    getCpf() {
        return this.cpf;
    }
    setId(id) {
        this.id = id;
    }
    setUuid(uuid) {
        this.uuid = uuid;
    }
    setName(name) {
        this.name = name;
    }
    setPhoto(photo) {
        this.photo = photo;
    }
    setIsEnabled(isEnabled) {
        this.isEnabled = isEnabled;
    }
    setEmail(email) {
        this.email = email;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
}
exports.ClientEntity = ClientEntity;
//# sourceMappingURL=client.entity.js.map