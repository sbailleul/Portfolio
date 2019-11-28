import {Route} from "./Route";
import {ArticleController} from "../../controllers/ArticleController";


export class Router{

    routeArray: Route[];

    constructor() {
        const articleController : ArticleController = ArticleController.getInstance();

        this.routeArray = [
            new Route("get", "/api/post", articleController.getAll),
            // new Route("get", "/api/post/:params", articleController.get),
            new Route("post", "/api/post", articleController.insert),
            new Route("put", "/api/post/:id", articleController.update),
            new Route("delete", "/api/post/:id", articleController.delete)];
    }
}
