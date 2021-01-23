import {Request, Response} from "express";
import UserModel from "../models/User.model";
import jwt from "jsonwebtoken";

class UserController {

    public async find(req: Request, res: Response) {
        return res.status(200).send({success: true});
    }

}

export default new UserController();