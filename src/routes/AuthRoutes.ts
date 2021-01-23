import {Router} from "express";
import AuthController from "../controllers/AuthController";

class AuthRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    private routes() {
        this.router.post('/signup', AuthController.signup);
        this.router.get('/signin', AuthController.signin);
    }
}

export default new AuthRoutes()