import { Router } from "express";
import UserController from "../controllers/UserController";
import authMiddleware from "../middleware/auth.middleware";

class UserRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    private routes() {
        this.router.get('/', authMiddleware, UserController.find);
    }
}

export default new UserRoutes()