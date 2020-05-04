import express, { RequestHandler } from "express";
import {EventsModel} from './EventsModel';
import {Database} from '../common/MongoDB';
import {Config} from '../config';



import { request } from "http";

export class EventsController {

    static db: Database = new Database(Config.url, "events");
    static eventsTable = 'events';




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
    public postEvents(req: express.Request, res: express.Response) {
        // console.log("name");
        // res.send(req.body.name);
        const proj: EventsModel = EventsModel.fromObject(req.body);

        EventsController.db.addRecord(EventsController.eventsTable, proj.toObject())
            .then((result: boolean) => res.send({ fn: 'postEvents', status: 'success' }).end())
            .catch((reason) => res.status(500).send(reason).end());
    }

    /**
     * Description:
     *  Deletes events that match Event Name
     *
     * @param req
     * @param res
     */
    public deleteEvent(req: express.Request, res: express.Response): void {
        console.log("delete event: " + req.params.id);
    }

    /**
     * Description:
     *  Returns all events within the DataBase
     * @param req
     * @param res
     */
    public getAllEvents(req: express.Request, res: express.Response): void {
        console.log("getting all events");
    }

}
