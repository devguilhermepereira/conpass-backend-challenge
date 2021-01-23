import {Router} from 'express';
import UserRoutes from "./routes/UserRoutes";

const routes = Router();

/** Declaração das rotas **/
routes.use('/users', UserRoutes.router);

export default routes; 
