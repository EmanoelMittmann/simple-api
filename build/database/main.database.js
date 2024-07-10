"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_factory_1 = require("../factories/database.factory");
const fs_1 = __importDefault(require("fs"));
async function seed() {
    const getQuery = fs_1.default.readFileSync('./src/database/seeds/insert-clients.sql', 'utf-8').toString();
    try {
        database_factory_1.database.connect();
        await database_factory_1.database.query(getQuery);
    }
    catch (error) {
        throw new Error(String(error));
    }
    database_factory_1.database.end();
    console.info('Database Seeded');
    process.exit(1);
}
seed();
//# sourceMappingURL=main.database.js.map