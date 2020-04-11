import express from "express";
import {EventsController} from "./EventsController";

export class EventsRouter {

    private router: express.Router = express.Router();
    private eventscontroller: EventsController = new EventsController();

    // Creates the routes for this router and returns a populated router object
    public getRouter(): express.Router {
        this.router.get("/events", this.eventscontroller.getHello);
        this.router.post("/events", this.eventscontroller.postHello);
        return this.router;
    }
}
