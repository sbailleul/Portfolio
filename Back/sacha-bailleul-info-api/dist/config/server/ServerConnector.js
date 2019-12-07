"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router_1 = require("../router/Router");
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
    setRoutes() {
        Router_1.Router.setRoutes(this.serverStrategy);
    }
}
exports.ServerConnector = ServerConnector;
//# sourceMappingURL=ServerConnector.js.map