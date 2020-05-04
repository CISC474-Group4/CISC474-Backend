import express from "express";
import { AppRouter} from './common/AppRouter'
import { EventsRouter } from './EventsHandler/EventsRouter';

export class ApiRouter extends AppRouter{
    // private router: express.Router = express.Router();
    // private controller: Controller = new Controller();
    constructor(){
        super();
    }


    // Creates the routes for this router and returns a populated router object
    // public getRouter(): express.Router {
    //     this.router.get("/hello", this.controller.getHello);
    //     this.router.post("/hello", this.controller.postHello);
    //     return this.router;
    // }

    //Add child routers
    setupRoutes(): void {
        this.addRouter('./EventsHandler', new EventsRouter());
    }

}
