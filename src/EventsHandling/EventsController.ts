import express from "express";
import { request } from "http";
import { EventsModel } from './EventsModel';
import { Database } from '../common/MongoDB';
import { Config } from '../config';

export class EventsController {
    static db: Database = new Database(Config.url, "event");
    static EventsTable = 'event';

    /**
     * Description:
     *  Retrieves Event that matches title
     * 
     * @param req request
     * @param res response 
     */
    public getEvent(req: express.Request, res: express.Response): void {
        const title = req.params.title;

        EventsController.db.getOneRecord(EventsController.EventsTable, {title: title})
            .then((results) => res.send({fn: 'getEvent', status: 'success', data: results}).end())
            .catch((reason) => res.status(500).send(reason).end());

    }

    /**
     * Description:
     * Retrieves unique Event titles that are a part of a given restaurant
     * @param req 
     * @param res 
     */

     public getEvents(req: express.Request, res: express.Response):void{
         const restaurant = req.params.restaurant;

         EventsController.db.getRecords(EventsController.EventsTable, {restaurant: restaurant})
            .then(results => {
                let events = results.map((x:any) => x.title);
                events = events.filter((value: string))
            })
     }

    /**
     * Description:
     *  Posts a new Event to Database
     * 
     * @param req 
     * @param res 
     */
    public postEvents(req: express.Request, res: express.Response): void { // this simply adds a new event to the database
        const event: EventsModel = EventsModel.fromObject(req.body);

        EventsController.db.addRecord(EventsController.EventsTable, event.toObject())
            .then((result: boolean) => res.send({fn: 'postEvents', status: 'success'}).end())
            .catch((reason) => res.status(500).send(reason).end());
    }

    /**
     * Description:
     *  Deletes events that match Event Name
     * 
     * @param req 
     * @param res 
     */
    public deleteEvent(req: express.Request, res: express.Response): void{
        const title = req.params.title;

        EventsController.db.deleteRecord(EventsController.EventsTable, {name: name})
            .then((results) => results ? (res.send({fn: 'deleteEvent', status: 'success'})) : (res.send({fn: 'deleteEvent', status: 'failure', data: 'Not found' })).end())
            .catch((reason) => res.status(500).send(reason).end());
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
