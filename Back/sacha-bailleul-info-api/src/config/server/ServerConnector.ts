import {ServerStrategy} from "./ServerStrategy";
import {Router} from "../router/Router";

export class ServerConnector {

    private _port: number;
    private serverStrategy: ServerStrategy;


    constructor(data:{port: number}, serverStrategy: ServerStrategy) {
        this._port = data.port;
        this.serverStrategy = serverStrategy;
    }


    get port(): number {
        return this._port;
    }

    listen(){
        this.serverStrategy.listen(this);
    }

    setRoutes(){
        Router.setRoutes(this.serverStrategy);
    }
}
