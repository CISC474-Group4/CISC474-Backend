"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventsController {
    getEvents(req, res) {
        console.log(req.params.id);
        res.send(req.body);
        console.log("output");
    }
    postEvents(req, res) {
        console.log("name");
        res.send(req.body.name);
    }
}
exports.EventsController = EventsController;
//# sourceMappingURL=EventsController.js.map