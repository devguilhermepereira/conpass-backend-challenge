import {Request, Response} from "express";
import CompanyModel from "../models/Company.model";

class CompanyController {

    public async create(req: Request, res: Response) {
        try {
            const company = await CompanyModel.save(req.body);
            return res.status(201).send(company);
        } catch (exception) {
            res.status(500).json(exception);
        }
    }

    public async update(req: Request, res: Response) {
        try {
            const company = await CompanyModel.update(req.params.id, req.body);
            return res.status(201).send(company);
        } catch (exception) {
            res.status(500).json(exception);
        }
    }

}

export default new CompanyController();