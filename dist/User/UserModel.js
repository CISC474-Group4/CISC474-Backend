"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserModel {
    constructor(email, password) {
        this.id = 0;
        this.name = '';
        this.email = '';
        this.restaurants = [];
        this._password = '';
        this.email = email;
        this.password = password;
    }
    set password(val) {
        this._password = UserModel.encryptString(val);
    }
    get password() {
        return this._password;
    }
    static fromObject(object) {
        const u = new UserModel(object.email, '');
        u.id = object.id;
        u.name = object.name;
        u.restaurants = object.restaurants;
        u._password = object.password;
        return u;
    }
    toObject() {
        return {
            name: this.name,
            email: this.email,
            id: this.id,
            restaurants: this.restaurants
        };
    }
    validatePassword(password) {
        if (this.password === '*') {
            return false;
        }
        return bcrypt_1.default.compareSync(password, this.password);
    }
    static encryptString(inval) {
        try {
            var salt = bcrypt_1.default.genSaltSync(10);
            return bcrypt_1.default.hashSync(inval, salt);
        }
        catch (err) {
            return '*';
        }
    }
}
exports.UserModel = UserModel;
//# sourceMappingURL=UserModel.js.map