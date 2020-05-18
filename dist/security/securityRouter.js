"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppRouter_1 = require("../common/AppRouter");
const securityController_1 = require("./securityController");
const securityMiddleware_1 = require("./securityMiddleware");
class SecurityRouter extends AppRouter_1.AppRouter {
    constructor() {
        super();
    }
    setupRoutes() {
        const securityController = new securityController_1.SecurityController();
        this.expressRouter.get('/authorize', [securityMiddleware_1.SecurityMiddleware.RequireAuth], securityController.authorize);
        this.expressRouter.post('/login', securityController.login);
        this.expressRouter.post('/register', securityController.register);
        this.expressRouter.post('/changepwd', [securityMiddleware_1.SecurityMiddleware.RequireAuth], securityController.changePwd);
    }
}
exports.SecurityRouter = SecurityRouter;
//# sourceMappingURL=securityRouter.js.map