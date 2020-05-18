import express from "express";
import {EventsController} from "./EventsController";

export class EventsRouter {

    private router: express.Router = express.Router();
    private eventscontroller: EventsController = new EventsController();

    // Creates the routes for this router and returns a populated router object
    public getRouter(): express.Router {
        this.router.get("/restaurant/:restaurant", this.eventscontroller.getEvents); //Get Events by ID
        this.router.get("/:title", this.eventscontroller.getEvent);
        this.router.post("/", this.eventscontroller.postEvents); // create new events
        this.router.delete("/:title", this.eventscontroller.deleteEvent);//Deletes event with matching ID
        this.router.get("/", this.eventscontroller.getAllEvents);// GETS a list of ALL unique event titles
        this.router.put("/:title", this.eventscontroller.updateEvent);


        return this.router;
    }
}
