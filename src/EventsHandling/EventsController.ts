import express from "express";
import { request } from "http";
import { EventsModel } from './EventsModel';
import { Database } from '../common/MongoDB';
import { Config } from '../config';

export class EventsController {
    static db: Database = new Database(Config.url, "events");
    static EventsTable = 'events';

    //addProject
    //adds the project to the database
    addEvents(req: express.Request, res: express.Response) {
        const proj: EventsModel = EventsModel.fromObject(req.body);
        // console.log(req.body);
        console.log("reached");
        EventsController.db.addRecord(EventsController.EventsTable, proj.toObject())
            .then((result: boolean) => res.send({ fn: 'addProject', status: 'success' }).end())
            .catch((reason) => res.status(500).send(reason).end());
    }



    // /**
    //  * Description:
    //  *  Retrieves Event that matches title
    //  * 
    //  * @param req request
    //  * @param res response 
    //  */
    // public getEvent(req: express.Request, res: express.Response): void {
    //     const title = req.params.title;

    //     EventsController.db.getOneRecord(EventsController.EventsTable, {title: title})
    //         .then((results) => res.send({fn: 'getEvent', status: 'success', data: results}).end())
    //         .catch((reason) => res.status(500).send(reason).end());

    // }

    // /**
    //  * Description:
    //  * Retrieves unique Event titles that are a part of a given restaurant
    //  * @param req 
    //  * @param res 
    //  */

    //  public getEvents(req: express.Request, res: express.Response):void{
    //      const restaurant = req.params.restaurant;
    //     // getting all records from the database that have the same restaurant value stored in their object
    //      EventsController.db.getRecords(EventsController.EventsTable, {restaurant: restaurant})
    //         .then((results) => res.send({fn: 'getEvents', status: 'success', data: results}).end())
    //         .catch((reason) => res.status(500).send(reason).end());
    //  }

    // /**
    //  * Description:
    //  *  Posts a new Event to Database
    //  * 
    //  * @param req 
    //  * @param res 
    //  */
    // public postEvents(req: express.Request, res: express.Response): void { // this simply adds a new event to the database
    //     const event: EventsModel = EventsModel.fromObject(req.body);

    //     EventsController.db.addRecord(EventsController.EventsTable, event.toObject())
    //         .then((result: boolean) => res.send({fn: 'postEvents', status: 'success'}).end())
    //         .catch((reason) => res.status(500).send(reason).end());
    // }

    // /**
    //  * Description:
    //  *  Deletes event that matches title
    //  * 
    //  * @param req 
    //  * @param res 
    //  */
    // public deleteEvent(req: express.Request, res: express.Response): void{
    //     const title = req.params.title;

    //     EventsController.db.deleteRecord(EventsController.EventsTable, {name: name})
    //         .then((results) => results ? (res.send({fn: 'deleteEvent', status: 'success'})) : (res.send({fn: 'deleteEvent', status: 'failure', data: 'Not found' })).end())
    //         .catch((reason) => res.status(500).send(reason).end());
    // }

    // /**
    //  * Description:
    //  *  Returns all unique events within the DataBase 
    //  * Once these are returned, users can search by title to get more information about a specific event
    //  * Running a getRecords() over the database, and then just extracting titles
    //  * @param req 
    //  * @param res 
    //  */
    // public getAllEvents(req: express.Request, res: express.Response): void {
    //     EventsController.db.getRecords(EventsController.EventsTable)
    //         .then(results => {
    //             // extracting Event Title only
    //             let titles = results.map((x: any) => x.title);
    //             // removing duplicates
    //             titles = titles.filter((value: string, index: number, array: any[]) =>
    //                 !array.filter((v,i) => value === v && i < index).length);
    //             res.send({fn: 'deleteEvent', status: 'success', data: {titles: titles} })
    //         })
    //         .catch((reason) => res.status(500).send(reason).end());
    // }

    // public updateEvent(req: express.Request, res: express.Response): void{
    //     const title = req.params.title;

    //     EventsController.db.updateRecord(EventsController.EventsTable, {title: title}, {$set: req.body})
    //         .then((results) => results ? (res.send({fn: 'updateEvent', status: 'success'})) : (res.send({fn: 'updateEvent', status: 'failure', data: 'Not found'})).end())
    //         .catch(err => res.send({fn: 'updateEvent', status: 'failure', data: err}).end());
    // }

    // /**
    //  * Description:
    //  * Returns all unique events that fit within a certain time frame.
    //  * @param req
    //  * @param res
    //  */

    //  public getEventByTime(req: express.Request, res: express.Response): void{
    //      EventsController.db.getRecords(EventsController.EventsTable)
    //  }

}
