"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel_1 = require("./UserModel");
const MongoDB_1 = require("../common/MongoDB");
const config_1 = require("../config");
class UserController {
    getUser(req, res) {
        const name = req.params.name;
        UserController.db.getOneRecord(UserController.userTable, { name: name })
            .then((results) => res.send({ fn: 'getUser', status: 'success', data: results }).end())
            .catch((reason) => res.status(500).send(reason).end());
    }
    getRestaurants(req, res) {
        UserController.db.getRecords(UserController.userTable)
            .then(results => {
            let restaurants = results.map((x) => x.restaurants);
        });
    }
    postUsers(req, res) {
        const use = UserModel_1.UserModel.fromObject(req.body); // this is representing the user object that is being added to our database
        UserController.db.addRecord(UserController.userTable, use.toObject())
            .then((result) => res.send({ fn: 'addRestaurant', status: 'success' }).end())
            .catch((reason) => res.status(500).send(reason).end());
    }
    deleteUsers(req, res) {
        const id = req.params.id;
        UserController.db.deleteRecord(UserController.userTable, { id: id })
            .then((results) => results ? (res.send({ fn: 'deleteUsers', status: 'success' })) : (res.send({ fn: 'deleteRestaurant', status: 'failure', data: 'Not found' })).end())
            .catch((reason) => res.status(500).send(reason).end());
    }
    /*public getAllUsers(req: express.Request, res: express.Response): void {
        console.log("getting all resetaurant")
    }*/
    updateUser(req, res) {
        const restaurants = req.params.restaurants;
        const data = req.body;
        delete data.authUser;
        UserController.db.updateRecord(UserController.userTable, { restaurants: restaurants }, { $set: req.body })
            .then((results) => results ? (res.send({ fn: 'updateUser', status: 'success' })) : (res.send({ fn: 'updateUser', status: 'failure', data: 'Not found' })).end())
            .catch(err => res.send({ fn: 'updateUser', status: 'failure', data: err }).end());
    }
}
exports.UserController = UserController;
UserController.db = new MongoDB_1.Database(config_1.Config.url, 'user');
UserController.userTable = 'user';
//# sourceMappingURL=UserController.js.map