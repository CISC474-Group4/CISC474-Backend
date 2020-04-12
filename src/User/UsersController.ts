import express from "express";
import { request } from "http";

export class UsersController {

    public getUsers(req: express.Request, res: express.Response): void {
        console.log(req.params.id);
        res.send(req.body);
        console.log("output");

    }
    public postUsers(req: express.Request, res: express.Response): void {
        console.log("name");
        res.send(req.body.name);
    }

    public deleteUsers(req: express.Request, res: express.Response): void{
        console.log("delete event: "+ req.params.id);
    }

    public getAllUsers(req: express.Request, res: express.Response): void {
        console.log("getting all resetaurant")
    }

}
