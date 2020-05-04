import express from "express";
import { request } from "http";
import { UserModel } from './UserModel';
import { Database } from '../common/MongoDB';
import { Config } from '../config';

export class UserController {
    static db: Database = new Database(Config.url, 'user');
    static userTable = 'user';

    public getUser(req: express.Request, res: express.Response): void { // this will send a json object of the user that matches the requested name. This should be the main get method that is utilized for Users
        const name = req.params.name;
        UserController.db.getOneRecord(UserController.userTable, { name: name })
            .then((results) => res.send({ fn: 'getUser', status: 'success', data: results }).end())
            .catch((reason) => res.status(500).send(reason).end());
    }

    public getRestaurants(req: express.Request, res: express.Response) { // meant to get a list of restaurants for a given user
        UserController.db.getRecords(UserController.userTable)
            .then(results => {
                let restaurants = results.map((x: any) => x.restaurants);
                
            })
    }
    public postUsers(req: express.Request, res: express.Response): void {
        const use: UserModel = UserModel.fromObject(req.body); // this is representing the user object that is being added to our database

        UserController.db.addRecord(UserController.userTable, use.toObject())
            .then((result: boolean) => res.send({ fn: 'addRestaurant', status: 'success' }).end())
            .catch((reason) => res.status(500).send(reason).end());
    }

    public deleteUsers(req: express.Request, res: express.Response): void {
        const id = req.params.id;

        UserController.db.deleteRecord(UserController.userTable, { id: id })
            .then((results) => results ? (res.send({ fn: 'deleteUsers', status: 'success' })) : (res.send({ fn: 'deleteRestaurant', status: 'failure', data: 'Not found' })).end())
            .catch((reason) => res.status(500).send(reason).end());
    }

    /*public getAllUsers(req: express.Request, res: express.Response): void {
        console.log("getting all resetaurant")
    }*/
    public updateUser(req: express.Request, res: express.Response) {
        const restaurants = req.params.restaurants;
        const data = req.body;

        UserController.db.updateRecord(UserController.userTable, { restaurants: restaurants }, { $set: req.body })
            .then((results) => results ? (res.send({ fn: 'updateUser', status: 'success' })) : (res.send({ fn: 'updateUser', status: 'failure', data: 'Not found' })).end())
            .catch(err => res.send({ fn: 'updateUser', status: 'failure', data: err }).end())
    }


}
