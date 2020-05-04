import express from "express";
import {RestaurantController} from "./RestaurantController";

export class RestaurantRouter {

    private router: express.Router = express.Router();
    private eventscontroller: RestaurantController = new RestaurantController();

    // Creates the routes for this router and returns a populated router object
    public getRouter(): express.Router {
        this.router.get("/restaurants/:id", this.eventscontroller.getRestaurant); // Get Events by ID
        this.router.post("/restaurants", this.eventscontroller.postRestaurant); // create new events
        this.router.delete("/restuarants/:name", this.eventscontroller.deleteRestaurant); // Deletes event with matching ID
        this.router.get("/restaurants", this.eventscontroller.getAllRestaurants); // GETS a list of Events

        return this.router;
    }
}
