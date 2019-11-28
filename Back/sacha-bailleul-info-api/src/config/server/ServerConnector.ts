// import express from "express";
// import bodyParser from "body-parser";
// const serverConnector = express();
//
// serverConnector.use(bodyParser.json());
//
// export default serverConnector;
//
// export class Server {
//
//     private port: number;
//
//     constructor(port: number) {
//         this.port = port;
//     }
// }

import {ServerStrategy} from "./ServerStrategy";

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
}
