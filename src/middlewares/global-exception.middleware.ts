import { NextFunction, Request, Response } from "express";
import { IHTTPError } from "../shared/contracts/IHttpError.contract";
import { HTTPStatusCode } from "../shared/https-codes";

export const exceptionHandler = (
    err: IHTTPError,
    req: Request,
    res: Response,
    _next: NextFunction,
) => {
    console.log('cheguei aqui');
    const statusCode = err.statusCode || HTTPStatusCode.InternalServerError
    const message = err.message || 'Internal Server Error'

    if(statusCode === HTTPStatusCode.Ok){
        _next()
    }

    return res.status(statusCode).send({statusCode,message})
}