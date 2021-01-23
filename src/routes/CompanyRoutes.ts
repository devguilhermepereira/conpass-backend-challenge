import {Router} from "express";
import CompanyController from "../controllers/CompanyController";
import authMiddleware from "../middleware/auth.middleware";

class UserRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    private routes() {
        this.router.post('/', authMiddleware, CompanyController.create);
        this.router.put('/:id', authMiddleware, CompanyController.update);
    }
}

export default new UserRoutes()