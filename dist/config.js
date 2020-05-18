"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = {
    serverport: process.env.PORT || 3000,
    secret: process.env.SECRET || "some-secret-goes-here",
    tokenLife: 1800,
    url: process.env.MONGOURL || "mongodb+srv://admin:cisc474group4@group4finalproject-7s64i.mongodb.net/test?retryWrites=true&w=majority"
};
//# sourceMappingURL=config.js.map