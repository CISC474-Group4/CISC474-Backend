"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const EventsController_1 = require("./EventsController");
class EventsRouter {
    constructor() {
        this.router = express_1.default.Router();
        this.eventscontroller = new EventsController_1.EventsController();
    }
    // Creates the routes for this router and returns a populated router object
    getRouter() {
        this.router.get("/events", this.eventscontroller.getHello);
        this.router.post("/events", this.eventscontroller.postHello);
        return this.router;
    }
}
exports.EventsRouter = EventsRouter;
//# sourceMappingURL=EventsRouter.js.map