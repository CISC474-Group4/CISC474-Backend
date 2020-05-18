"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventsModel {
    constructor() {
        this.title = '';
        this.startTime = 0;
        this.endTime = 0;
        this.description = "";
        this.restaurant = "";
    }
    static fromObject(object) {
        const e = new EventsModel();
        e.title = object.title;
        e.startTime = object.startTime;
        e.endTime = object.endTime;
        e.description = object.description;
        e.restaurant = object.restaurant;
        return e;
    }
    toObject() {
        return {
            title: this.title,
            startTime: this.startTime,
            endTime: this.endTime,
            description: this.description,
            restaurant: this.restaurant
        };
    }
}
exports.EventsModel = EventsModel;
//# sourceMappingURL=EventsModel.js.map