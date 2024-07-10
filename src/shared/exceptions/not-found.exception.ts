import createError from 'http-errors'
import { HTTPStatusCode } from '../https-codes'

export class NotFoundException {
    constructor(message = 'Not Found'){
        throw createError(HTTPStatusCode.NotFound, message)
    }
}