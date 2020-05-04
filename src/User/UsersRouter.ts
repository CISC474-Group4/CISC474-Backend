import express from "express";
import {UsersController} from "./UsersController";

export class RestaurantRouter {

    private router: express.Router = express.Router();
    private eventscontroller: UsersController = new UsersController();

    // Creates the routes for this router and returns a populated router object
    public getRouter(): express.Router {
        this.router.get("/users/:id", this.eventscontroller.getUsers); // Get Users by ID
        this.router.post("/users", this.eventscontroller.postUsers); // create new user
        this.router.delete("/users/:id", this.eventscontroller.deleteUsers); // Deletes user with matching ID
        this.router.get("/users", this.eventscontroller.getAllUsers); // GETS a list of users

        return this.router;
    }
}
