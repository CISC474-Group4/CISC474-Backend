import express from "express";
import { request } from "http";
import { RestaurantModel } from './RestaurantModel';
import { Database } from '../common/MongoDB';
import { Config } from '../config';

export class RestaurantController {
    static db: Database = new Database(Config.url, "restaurants");
    static restaurantTable = 'restaurants';







    getAllRestaurants(req: express.Request, res: express.Response): void {
        RestaurantController.db.getRecords(RestaurantController.restaurantTable)
            // .then((results) => res.send({fn: 'getRestaurant', status: 'success', data: results}).end())
            .then((results) => res.send(results).end())

            .catch((reason) => res.status(500).send(reason).end());

    }
    postRestaurant(req: express.Request, res: express.Response){
        const resta: RestaurantModel = RestaurantModel.fromObject(req.body);
        RestaurantController.db.addRecord(RestaurantController.restaurantTable, resta.toObject())
            .then((result: boolean) => res.send({fn: 'postRestaurant', status: 'success'}).end())
            .catch((reason) => res.status(500).send(reason).end());
    }

    deleteRestaurant(req: express.Request, res: express.Response): void{
        const id = Database.stringToId(req.params.id);
        RestaurantController.db.deleteRecord(RestaurantController.restaurantTable, {_id: id})
            .then((results) => results ? (res.send({fn: 'deleteRestaurant', status: 'success' })) : (res.send({fn: 'deleteRestaurant', status: 'failure', data: 'Not found' })).end())
            .catch((reason) => res.status(500).send(reason).end());
    }

    updateRestaurant(req: express.Request, res: express.Response){ // this is going to serve to update restaurant details, events, and tags
        const id = Database.stringToId(req.params.id);
        const data = req.body;
        delete data._id;
        
        RestaurantController.db.updateRecord(RestaurantController.restaurantTable, {_id: id}, {$set: data})
            .then((results) => results ? (res.send({fn: 'updateRestaurant', status: 'success'})) : (res.send({fn: 'updateRestaurant', status: 'failure', data: 'Not found'})).end())
            .catch(err => res.send({fn: 'updateRestaurant', status: 'failure', data: err}).end());

    }


    // public getAllRestaurants(req: express.Request, res: express.Response): void { // return all valid unique restaurant names in the database
    //     RestaurantController.db.getRecords(RestaurantController.restaurantTable)
    //         .then(results => {
    //             let restaurants = results.map((x:any) => x.name);
    //             restaurants = restaurants.filter((value: string, index: number, array: any[]) =>
    //                 !array.filter((v,i) => value === v && i < index).length);
    //             res.send({fn: 'deleteRestaurant', status: 'success', data: {restaurants: restaurants}})
    //         })
    //         .catch((reason) => res.status(500).send(reason).end()); 
    // }

    
}
