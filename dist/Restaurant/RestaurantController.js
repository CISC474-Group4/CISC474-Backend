"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RestaurantModel_1 = require("./RestaurantModel");
const MongoDB_1 = require("../common/MongoDB");
const config_1 = require("../config");
class RestaurantController {
    getRestaurant(req, res) {
        const name = req.params.name;
        RestaurantController.db.getOneRecord(RestaurantController.restaurantTable, { name: name })
            .then((results) => res.send({ fn: 'getRestaurant', status: 'success', data: results }).end())
            .catch((reason) => res.status(500).send(reason).end());
    }
    postRestaurant(req, res) {
        const resta = RestaurantModel_1.RestaurantModel.fromObject(req.body);
        RestaurantController.db.addRecord(RestaurantController.restaurantTable, resta.toObject())
            .then((result) => res.send({ fn: 'postRestaurant', status: 'success' }).end())
            .catch((reason) => res.status(500).send(reason).end());
    }
    deleteRestaurant(req, res) {
        const id = MongoDB_1.Database.stringToId(req.params.id);
        RestaurantController.db.deleteRecord(RestaurantController.restaurantTable, { _id: id })
            .then((results) => results ? (res.send({ fn: 'deleteRestaurant', status: 'success' })) : (res.send({ fn: 'deleteRestaurant', status: 'failure', data: 'Not found' })).end())
            .catch((reason) => res.status(500).send(reason).end());
    }
    getAllRestaurants(req, res) {
        RestaurantController.db.getRecords(RestaurantController.restaurantTable)
            .then(results => {
            let restaurants = results.map((x) => x.name);
            restaurants = restaurants.filter((value, index, array) => !array.filter((v, i) => value === v && i < index).length);
            res.send({ fn: 'deleteRestaurant', status: 'success', data: { restaurants: restaurants } });
        })
            .catch((reason) => res.status(500).send(reason).end());
    }
    updateRestaurant(req, res) {
        const name = req.params.name;
        RestaurantController.db.updateRecord(RestaurantController.restaurantTable, { name: name }, { $set: req.body })
            .then((results) => results ? (res.send({ fn: 'updateRestaurant', status: 'success' })) : (res.send({ fn: 'updateRestaurant', status: 'failure', data: 'Not found' })).end())
            .catch(err => res.send({ fn: 'updateRestaurant', status: 'failure', data: err }).end());
    }
}
exports.RestaurantController = RestaurantController;
RestaurantController.db = new MongoDB_1.Database(config_1.Config.url, "data");
RestaurantController.restaurantTable = 'restaurants';
//# sourceMappingURL=RestaurantController.js.map