import {Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import UserModel from "../models/User.model";
// @ts-ignore
import * as bcryptjs from 'bcryptjs';
import CompanyModel from "../models/Company.model";

class AuthController {

    public async signup(req: Request, res: Response) {
        try {
            const secretKey: any = process.env.SECRET_KEY;
            let newUser: UserModel = new UserModel();
            newUser.email = req.body.email;
            newUser.name = req.body.name;
            newUser.password = await bcryptjs.hashSync(req.body.password, 4);
            newUser = await UserModel.save(newUser);
            const result: any = {token: null, user: newUser}
            const account = {
                id: newUser.id,
                email: newUser.email,
                isOwner: false,
                company:  null
            }
            result.token = jwt.sign(account, secretKey, {expiresIn: "30d"});
            res.status(200).json(result);
        } catch (exception) {
            res.status(500).json(exception);
        }
    }

    public async signin(req: Request, res: Response) {
        try {
            const secretKey: any = process.env.SECRET_KEY;
            const user = await UserModel.findOne({where: {email: req.body.email}, relations: ['company']});
            if (!user || !bcryptjs.compareSync(req.body.password, user.password)) {
                res.status(500).json({message: 'Email or password incorrect!'});
            } else if (!user.enabled) {
                res.status(500).json({message: 'User disabled'});
            } else if (user.company) {
                const account = {
                    id: user.id,
                    email: user.email,
                    isOwner: false,
                    company: user.company ? user.company.id : null
                }
                const token = jwt.sign(account, secretKey, {expiresIn: "30d"});
                res.status(200).json({account, token});
            } else {
                const company = await CompanyModel.findOne({where: {owner: user.id}});
                const account = {
                    id: user.id,
                    email: user.email,
                    isOwner: !!company,
                    company: company ? company.id : null
                }
                const token = jwt.sign(account, secretKey, {expiresIn: "30d"});
                res.status(200).json({account, token});
            }
        } catch (exception) {
            res.status(500).json(exception);
        }
    }
}

export default new AuthController()
