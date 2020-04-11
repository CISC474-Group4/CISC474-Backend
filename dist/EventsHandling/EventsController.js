"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventsController {
    getHello(req, res) {
        res.send("Hello World");
        console.log("called");
    }
    postHello(req, res) {
        res.send(req.body);
    }
}
exports.EventsController = EventsController;
//# sourceMappingURL=EventsController.js.map