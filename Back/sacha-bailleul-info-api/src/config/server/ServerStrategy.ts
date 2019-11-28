import {ServerConnector} from "./ServerConnector";

export interface ServerStrategy{

    listen(serverConnector: ServerConnector): void;

}
