import express from "express";
import { request } from "http";

export class EventsController {

    /**
     * Description:
     *  Retrieves Events that match ID
     * 
     * @param req request
     * @param res response 
     */
    public getEvents(req: express.Request, res: express.Response): void {
        console.log(req.params.id);
        res.send(req.body);
        console.log("output");

    }

    /**
     * Description:
     *  Posts a new Event to Database
     * 
     * @param req 
     * @param res 
     */
    public postEvents(req: express.Request, res: express.Response): void {
        console.log("name");
        res.send(req.body.name);
    }

    /**
     * Description:
     *  Deletes events that match Event Name
     * 
     * @param req 
     * @param res 
     */
    public deleteEvent(req: express.Request, res: express.Response): void{
        console.log("delete event: "+ req.params.id);
    }

    /**
     * Description:
     *  Returns all events within the DataBase
     * @param req 
     * @param res 
     */
    public getAllEvents(req: express.Request, res: express.Response): void {
        console.log("getting all events")
    }

}
