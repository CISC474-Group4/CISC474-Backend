import express from "express";
import {EventsController} from "./EventsController";
import { AppRouter } from "../common/AppRouter";


    // Creates the routes for this router and returns a populated router object
    // public getRouter(): express.Router {
    //     this.router.get("/events/:restaurant", this.eventscontroller.getEvents); //Get Events by ID
    //     this.router.get("/events/:title", this.eventscontroller.getEvent);
    //     this.router.post("/events", this.eventscontroller.postEvents); // create new events
    //     this.router.delete("/events/:title", this.eventscontroller.deleteEvent);//Deletes event with matching ID
    //     this.router.get("/events", this.eventscontroller.getAllEvents);// GETS a list of ALL unique event titles
    //     this.router.patch("/events:title", this.eventscontroller.updateEvent);


    //     return this.router;
    // }

    export class EventsRouter extends AppRouter{
        static eventsController: EventsController=new EventsController();
        constructor(){super();}
    
        //sets up the routes within this module shows an example of a route that requires authorization, and one that does not
        setupRoutes(): void {   
            this.expressRouter.get('/',EventsRouter.eventsController.getAllEvents);   //Get all events
            this.expressRouter.post('/',EventsRouter.eventsController.addEvents);//Add a New event
            this.expressRouter.get('/:restaurant',EventsRouter.eventsController.getRestaurantEvents);//GetEvent by Title Name
            this.expressRouter.delete('/:id', EventsRouter.eventsController.removeEvent);
            this.expressRouter.put('/:id', EventsRouter.eventsController.updateEvent);
        }    
    }