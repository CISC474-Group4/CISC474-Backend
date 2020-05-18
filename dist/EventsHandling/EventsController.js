"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventsModel_1 = require("./EventsModel");
const MongoDB_1 = require("../common/MongoDB");
const config_1 = require("../config");
class EventsController {
    /**
     * Description:
     *  Retrieves Event that matches title
     *
     * @param req request
     * @param res response
     */
    getEvent(req, res) {
        const title = req.params.title;
        EventsController.db.getOneRecord(EventsController.EventsTable, { title: title })
            .then((results) => {
            res.send({ fn: 'getEvent', status: 'success', data: results }).end();
        })
            .catch((reason) => res.status(500).send(reason).end());
    }
    /**
     * Description:
     * Retrieves unique Event titles that are a part of a given restaurant
     * @param req
     * @param res
     */
    getEvents(req, res) {
        const restaurant = req.params.restaurant;
        // getting all records from the database that have the same restaurant value stored in their object
        EventsController.db.getRecords(EventsController.EventsTable, { restaurant: restaurant })
            .then((results) => res.send({ fn: 'getEvents', status: 'success', data: results }).end())
            .catch((reason) => res.status(500).send(reason).end());
    }
    /**
     * Description:
     *  Posts a new Event to Database
     *
     * @param req
     * @param res
     */
    postEvents(req, res) {
        const event = EventsModel_1.EventsModel.fromObject(req.body);
        EventsController.db.addRecord(EventsController.EventsTable, event.toObject())
            .then((result) => res.send({ fn: 'postEvents', status: 'success' }).end())
            .catch((reason) => res.status(500).send(reason).end());
    }
    /**
     * Description:
     *  Deletes event that matches title
     *
     * @param req
     * @param res
     */
    deleteEvent(req, res) {
        const title = req.params.title;
        EventsController.db.deleteRecord(EventsController.EventsTable, { name: name })
            .then((results) => results ? (res.send({ fn: 'deleteEvent', status: 'success' })) : (res.send({ fn: 'deleteEvent', status: 'failure', data: 'Not found' })).end())
            .catch((reason) => res.status(500).send(reason).end());
    }
    /**
     * Description:
     *  Returns all unique events within the DataBase
     * Once these are returned, users can search by title to get more information about a specific event
     * Running a getRecords() over the database, and then just extracting titles
     * @param req
     * @param res
     */
    getAllEvents(req, res) {
        EventsController.db.getRecords(EventsController.EventsTable)
            .then(results => {
            // extracting Event Title only
            let titles = results.map((x) => x.title);
            // removing duplicates
            titles = titles.filter((value, index, array) => !array.filter((v, i) => value === v && i < index).length);
            res.send({ fn: 'deleteEvent', status: 'success', data: { titles: titles } });
        })
            .catch((reason) => res.status(500).send(reason).end());
    }
    updateEvent(req, res) {
        const title = req.params.title;
        EventsController.db.updateRecord(EventsController.EventsTable, { title: title }, { $set: req.body })
            .then((results) => results ? (res.send({ fn: 'updateEvent', status: 'success' })) : (res.send({ fn: 'updateEvent', status: 'failure', data: 'Not found' })).end())
            .catch(err => res.send({ fn: 'updateEvent', status: 'failure', data: err }).end());
    }
    /**
     * Description:
     * Returns all unique events that fit within a certain time frame.
     * @param req
     * @param res
     */
    getEventByTime(req, res) {
        EventsController.db.getRecords(EventsController.EventsTable);
    }
}
exports.EventsController = EventsController;
EventsController.db = new MongoDB_1.Database(config_1.Config.url, "data");
EventsController.EventsTable = 'events';
//# sourceMappingURL=EventsController.js.map