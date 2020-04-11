import express from "express";

export class EventsController {

    public getHello(req: express.Request, res: express.Response): void {
        res.send("Hello World");
        console.log("called");
    }
    public postHello(req: express.Request, res: express.Response): void {
        res.send(req.body);
    }
}
