import "reflect-metadata";
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import path from 'path';
import {createConnection, getConnectionOptions} from 'typeorm';
import routes from './routes';
import {createServer, Server} from 'http';
import AuthRoutes from "./routes/AuthRoutes";

require("dotenv").config();

class App {
    public express: express.Application;
    public server!: Server;

    constructor() {
        App.database().then();
        this.express = express();
        this.middlewares();
        this.routes();
        this.server = createServer(this.express);
        console.log('Starting API-CONPASS-BACKEND-CHALLENGER!');
    }

    private middlewares() {
        this.express.use(express.json());
        this.express.use(cors());
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({extended: true}));
        this.express.use(express.static(path.join(__dirname, "dist")));
    }

    private static async database() {
        try {
            const connectionOptions: any = await getConnectionOptions();
            const connection = await createConnection(connectionOptions);
            await connection.runMigrations();
            console.log('Connection to the database successful!');
        } catch (exception) {
            console.log('Error connecting to the database', exception);
        }
    }

    private async routes() {
        this.express.use('/auth', AuthRoutes.router);
        this.express.use('/api', routes);
        this.express.use((req, res) => {
            res.status(404).send({
                error: true,
                message: 'API-CONPASS-BACKEND-CHALLENGER - Feature not available. Check the documentation!'
            })
        });
    }
}

export default new

App()
