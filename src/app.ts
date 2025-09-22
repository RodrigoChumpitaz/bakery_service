import express, { type Request, type Response, type Application } from "express";
import { NotFoundPathException } from "./shared";
import morgan from "morgan";
import cors from 'cors'
import supplyRoutes from "./routes/supply.routes";
import recipeRoutes from "./routes/recipe.routes";

class App {
    app: Application;
    constructor() {
        this.app = express();
        this.middlewaresBefore();
        this.routes();
        this.middlewaresAfter();
    }

    middlewaresBefore() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(morgan("combined"));
        this.app.use('/favicon.ico', (req: Request, res: Response) => res.status(204).end() as any);
        this.app.use(cors({
            origin: '*',
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH']
        }))
    }
    
    routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.send('Welcome to the Bakery Service API!');
        });
        this.app.use('/api/v1', supplyRoutes, recipeRoutes);
    }
    
    middlewaresAfter() {
        this.app.use(NotFoundPathException.handleNotFoundPath);
    }
}

export default new App().app;