import {ServerConnector} from "./ServerConnector";

export interface ServerStrategy{

    listen(serverConnector: ServerConnector): void;
    route(data: {url: string, httpMethod: string, callback: Function}): void;

}
