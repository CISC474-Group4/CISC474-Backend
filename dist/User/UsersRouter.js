"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = require("./UserController");
class RestaurantRouter {
    constructor() {
        this.router = express_1.default.Router();
        this.eventscontroller = new UserController_1.UserController();
    }
    // Creates the routes for this router and returns a populated router object
    getRouter() {
        this.router.get("/users/:name", this.eventscontroller.getUser); //Get Users by ID
        this.router.post("/users", this.eventscontroller.postUsers); // create new user
        this.router.delete("/users/:id", this.eventscontroller.deleteUsers); //Deletes user with matching ID
        //this.router.get("/users", this.eventscontroller.getAllUsers);// GETS a list of users
        this.router.patch("/users/:restaurants", this.eventscontroller.updateUser);
        return this.router;
    }
}
exports.RestaurantRouter = RestaurantRouter;
//# sourceMappingURL=UsersRouter.js.map