"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RestaurantModel {
    constructor() {
        this.name = '';
        this.tags = [];
        this.description = '';
        this.address = '';
        this.restImg = '';
        this.events = [];
    }
    static fromObject(object) {
        const r = new RestaurantModel();
        r.name = object.name;
        r.tags = object.tags;
        r.events = object.events;
        r.description = object.description;
        r.address = object.address;
        r.restImg = object.restImg;
        return r;
    }
    toObject() {
        return {
            name: this.name,
            tags: this.tags,
            events: this.events,
            description: this.description,
            address: this.address,
            restImg: this.restImg
        };
    }
}
exports.RestaurantModel = RestaurantModel;
//# sourceMappingURL=RestaurantModel.js.map