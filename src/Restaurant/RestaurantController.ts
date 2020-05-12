import express from "express";
import { request } from "http";
import { RestaurantModel } from './RestaurantModel';
import { Database } from '../common/MongoDB';
import { Config } from '../config';

export class RestaurantController {
    static db: Database = new Database(Config.url, "restaurant");
    static restaurantTable = 'restaurant';

    public getRestaurant(req: express.Request, res: express.Response): void {
        console.log(req.params.id);
        res.send(req.body);
        console.log("output");

    }
    public postRestaurant(req: express.Request, res: express.Response){
        const resta: RestaurantModel = RestaurantModel.fromObject(req.body);

        RestaurantController.db.addRecord(RestaurantController.restaurantTable, resta.toObject())
            .then((result: boolean) => res.send({fn: 'addRestaurant', status: 'success'}).end())
            .catch((reason) => res.status(500).send(reason).end());
    }

    public deleteRestaurant(req: express.Request, res: express.Response): void{
        const id = Database.stringToId(req.params.id);

        RestaurantController.db.deleteRecord(RestaurantController.restaurantTable, {_id: id})
            .then((results) => results ? (res.send({fn: 'deleteRestaurant', status: 'success' })) : (res.send({fn: 'deleteRestaurant', status: 'failure', data: 'Not found' })).end())
            .catch((reason) => res.status(500).send(reason).end());
    }

    public getAllRestaurants(req: express.Request, res: express.Response): void {
        console.log("getting all resetaurant");
    }

    public updateRestaurant(req: express.Request, res: express.Response){ // this is going to serve to update restaurant details, events, and tags
        // we may make extra methods for the other things, but we'll evaluate this as we go along

    }

}
