"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServerFactory_1 = require("./config/server/ServerFactory");
const FactoryInstantiator_1 = require("./config/reflection/FactoryInstantiator");
const DbConnectorFactory_1 = require("./config/database/DbConnectorFactory");
FactoryInstantiator_1.FactoryInstantiator.instantiateFactories();
const dbConnector = DbConnectorFactory_1.DbConnectorFactory.getInstance().getDbConnector();
const serverConnector = ServerFactory_1.ServerFactory.getInstance().getServerConnector();
if (dbConnector && serverConnector) {
    serverConnector.setRoutes();
    dbConnector.connect();
    serverConnector.listen();
}
//# sourceMappingURL=index.js.map