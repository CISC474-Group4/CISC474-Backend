"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RestaurantController_1 = require("./RestaurantController");
class RestaurantRouter {
    constructor() {
        this.router = express_1.default.Router();
        this.eventscontroller = new RestaurantController_1.RestaurantController();
    }
    // Creates the routes for this router and returns a populated router object
    getRouter() {
        this.router.get("/:name", this.eventscontroller.getRestaurant); //Get Events by ID
        this.router.post("/", this.eventscontroller.postRestaurant); // create new events
        this.router.delete("/:name", this.eventscontroller.deleteRestaurant); //Deletes event with matching ID
        this.router.get("/", this.eventscontroller.getAllRestaurants); // GETS a list of restaurants
        this.router.put("/:name", this.eventscontroller.updateRestaurant);
        return this.router;
    }
}
exports.RestaurantRouter = RestaurantRouter;
//# sourceMappingURL=RestaurantRouter.js.map