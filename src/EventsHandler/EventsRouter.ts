import express from "express";
import {AppRouter } from "../common/AppRouter";
import {EventsController} from "./EventsController";

export class EventsRouter extends AppRouter  {

    
    static eventscontroller: EventsController = new EventsController();
    
    constructor(){
        super();
    }

    // Creates the routes for this router and returns a populated router object
   setupRoutes(): void {
        this.router.get('/events/:id', EventsRouter.eventscontroller.getEvents); // Get Events by ID
        this.router.get("/events", EventsRouter.eventscontroller.getAllEvents); // GETS a list of Events
        this.router.post("/events", EventsRouter.eventscontroller.postEvents); // create new events
        this.router.delete("/events/:id", EventsRouter.eventscontroller.deleteEvent); // Deletes event with matching ID

    }
}
