import express from "express";
import {RestaurantController} from "./RestaurantController";

export class RestaurantRouter {

    private router: express.Router = express.Router();
    private eventscontroller: RestaurantController = new RestaurantController();

    // Creates the routes for this router and returns a populated router object
    public getRouter(): express.Router {
        this.router.get("/:name", this.eventscontroller.getRestaurant); //Get Events by ID
        this.router.post("/", this.eventscontroller.postRestaurant); // create new events
        this.router.delete("/:name", this.eventscontroller.deleteRestaurant);//Deletes event with matching ID
        this.router.get("/", this.eventscontroller.getAllRestaurants);// GETS a list of restaurants
        this.router.put("/:name", this.eventscontroller.updateRestaurant);
        
        
        return this.router;
    }
}
