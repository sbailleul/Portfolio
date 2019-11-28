"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServerConnector_1 = require("./ServerConnector");
const ServerType_1 = require("./ServerType");
const ExpressServerStrategy_1 = require("./ExpressServerStrategy");
const ResourcesConfig_1 = require("../../resources/ResourcesConfig");
class ServerFactory {
    static getServerConnector(serverType) {
        if (!this.server) {
            switch (serverType) {
                case ServerType_1.ServerType.EXPRESS:
                    this.server = new ServerConnector_1.ServerConnector(ResourcesConfig_1.ResourcesConfig.EXPRESS_CONFIG, new ExpressServerStrategy_1.ExpressServerStrategy());
                    break;
            }
        }
        return this.server;
    }
}
exports.ServerFactory = ServerFactory;
//# sourceMappingURL=ServerFactory.js.map