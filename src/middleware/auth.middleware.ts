import {NextFunction, Request, Response} from 'express';
import jwt from "jsonwebtoken";


function authMiddleware(request: Request, response: Response, next: NextFunction) {
    // check header or url parameters or post parameters for token
    const token = request.headers.authorization ? request.headers.authorization.substr(7) : null;
    // decode token
    if (token) {
        const secretKey: any = process.env.SECRET_KEY;
        // verifies secret and checks exp
        jwt.verify(token, secretKey, (err: any, decoded: any) => {
            if (err) {
                return response.status(403).json({
                    message: 'Token verification failed, please re-authenticate to access the platform!',
                    expired_token : true
                });
            } else {
                next();
            }
        });
    } else {
        return response.status(403).json({
            message: 'Token not Informed, login to access the platform!'
        });
    }
}

export default authMiddleware;