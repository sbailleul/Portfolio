"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
class ServerConnector {
    constructor(data, serverStrategy) {
        this._port = data.port;
        this.serverStrategy = serverStrategy;
    }
    get port() {
        return this._port;
    }
    listen() {
        this.serverStrategy.listen(this);
    }
}
exports.ServerConnector = ServerConnector;
//# sourceMappingURL=ServerConnector.js.map