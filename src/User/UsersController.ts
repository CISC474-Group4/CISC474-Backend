import express from "express";
import { request } from "http";
import { UserModel } from './UserModel';
import { Database } from '../common/MongoDB';
import { Config } from '../config';

export class UserController {
    static db: Database = new Database(Config.url, 'user');
    static userTable = 'user';

    public getUsers(req: express.Request, res: express.Response): void {
        console.log(req.params.id);
        res.send(req.body);
        console.log("output");

    }
    public postUsers(req: express.Request, res: express.Response): void {
        const use: UserModel = UserModel.fromObject(req.body);

        UserController.db.addRecord(UserController.userTable, use.toObject())
            .then((result: boolean) => res.send({fn: 'addRestaurant', status: 'success'}).end())
            .catch((reason) => res.status(500).send(reason).end());
    }

    public deleteUsers(req: express.Request, res: express.Response): void{
        const id = Database.stringToId(req.params.id);

        UserController.db.deleteRecord(UserController.userTable, {_id: id})
            .then((results) => results ? (res.send({fn: 'deleteRestaurant', status: 'success' })) : (res.send({fn: 'deleteRestaurant', status: 'failure', data: 'Not found' })).end())
            .catch((reason) => res.status(500).send(reason).end());
    }

    public getAllUsers(req: express.Request, res: express.Response): void {
        console.log("getting all resetaurant")
    }

}
