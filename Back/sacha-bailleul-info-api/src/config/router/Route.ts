import Controller from "../../controllers/Controller";

export class Route{

    httpMethod: string;
    url: string;
    controllerMethod: Function;

    constructor(httpMethod: string, url: string, controllerMethod: Function) {
        this.httpMethod = httpMethod;
        this.url = url;
        this.controllerMethod = controllerMethod;
    }
}
