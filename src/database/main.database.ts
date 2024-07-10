import { database } from "../factories/database.factory";
import fs from 'fs'

async function seed(){
    const getQuery = fs.readFileSync('./src/database/seeds/insert-clients.sql', 'utf-8').toString()
    try {
        database.connect()
        await database.query(getQuery)
    } catch (error) {
        throw new Error(String(error))
    }

    database.end()
    console.info('Database Seeded')
    process.exit(1)
}

seed()