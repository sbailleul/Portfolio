"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = require("./Route");
const ArticleController_1 = require("../../controllers/ArticleController");
class Router {
    constructor() {
        const articleController = ArticleController_1.ArticleController.getInstance();
        this.routeArray = [
            new Route_1.Route("get", "/api/post", articleController.getAll),
            // new Route("get", "/api/post/:params", articleController.get),
            new Route_1.Route("post", "/api/post", articleController.insert),
            new Route_1.Route("put", "/api/post/:id", articleController.update),
            new Route_1.Route("delete", "/api/post/:id", articleController.delete)
        ];
    }
}
exports.Router = Router;
//# sourceMappingURL=Router.js.map