import express from "express";
import {RestaurantController} from "./RestaurantController";
import { AppRouter } from "../common/AppRouter";

export class RestaurantRouter extends AppRouter{
   

    static restaurantController: RestaurantController=new RestaurantController();
    constructor(){super();}


    setupRoutes(): void {
        // this.expressRouter.get('/',RestaurantController.restaurantController.getAllRestaurants);
        // this.expressRouter.post('/restaurants', RestaurantController.restaurantController); // create new events
        this.expressRouter.post('/', RestaurantRouter.restaurantController.postRestaurant);
        this.expressRouter.get('/', RestaurantRouter.restaurantController.getAllRestaurants);
        this.expressRouter.delete('/:id', RestaurantRouter.restaurantController.deleteRestaurant);
        this.expressRouter.put('/:id', RestaurantRouter.restaurantController.updateRestaurant);   
    }

    

    // Creates the routes for this router and returns a populated router object
    // public getRouter(): express.Router {
    //     this.router.get("/restaurants/:name", this.eventscontroller.getRestaurant); //Get Events by ID
    //     this.router.post("/restaurants", this.eventscontroller.postRestaurant); // create new events
    //     this.router.delete("/restuarants/:name", this.eventscontroller.deleteRestaurant);//Deletes event with matching ID
    //     this.router.get("/restaurants", this.eventscontroller.getAllRestaurants);// GETS a list of restaurants
    //     this.router.patch("/restaurants:name", this.eventscontroller.updateRestaurant);
        
        
    //     return this.router;
    // }
}
