import express, { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import { Config } from '../config';

export class SecurityMiddleware {

    static get RequireAuth(): RequestHandler {
        return (req: express.Request, res: express.Response, next: express.NextFunction) => {
            let token = req.headers["x-access-token"] || req.headers["authorization"];
            if (!token) return res.status(401).send("Access denied. No token provided.");

            if (token.includes('bearer')) token = token.toString().substr(6).trimLeft();
            try {
                const decoded = jwt.verify(token.toString(), Config.secret);
                req.body.authUser = decoded;
                next();
            } catch (ex) {
                res.status(400).send("Invalid token.");
            }
        }
    }
}