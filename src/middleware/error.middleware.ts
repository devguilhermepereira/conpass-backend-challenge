import {NextFunction, Request, Response} from 'express';
import HttpException from "./HttpException";


function errorMiddleware(error: HttpException, request: Request, response: Response, next: NextFunction) {
    const status = error.status || 500;
    const message = error.message || 'Ops, ocorreu um erro com a conexão.';
    return response.status(status).json({message: message})
}

export default errorMiddleware;