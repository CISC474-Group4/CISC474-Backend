"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
class SecurityMiddleware {
    static get RequireAuth() {
        return (req, res, next) => {
            let token = req.headers["x-access-token"] || req.headers["authorization"];
            if (!token)
                return res.status(401).send("Access denied. No token provided.");
            if (token.includes('bearer'))
                token = token.toString().substr(6).trimLeft();
            try {
                const decoded = jsonwebtoken_1.default.verify(token.toString(), config_1.Config.secret);
                req.body.authUser = decoded;
                next();
            }
            catch (ex) {
                res.status(400).send("Invalid token.");
            }
        };
    }
}
exports.SecurityMiddleware = SecurityMiddleware;
//# sourceMappingURL=securityMiddleware.js.map