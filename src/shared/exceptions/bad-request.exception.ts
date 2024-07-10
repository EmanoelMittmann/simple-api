import createError from 'http-errors'
import { HTTPStatusCode } from '../https-codes'

export class BadRequestException {
    constructor(message = 'Bad Request'){
        throw createError(HTTPStatusCode.BadRequest, message)
    }
}