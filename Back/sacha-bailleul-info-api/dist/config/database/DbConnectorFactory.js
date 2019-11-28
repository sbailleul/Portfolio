"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DbConnector_1 = require("./DbConnector");
const DbConnectorType_1 = require("./DbConnectorType");
const ResourcesConfig_1 = require("../../resources/ResourcesConfig");
const MySQLStrategy_1 = require("./MySQLStrategy");
const MongoDBStrategy_1 = require("./MongoDBStrategy");
class DbConnectorFactory {
    static getDbConnector(dbConnectorType) {
        if (!this.dbConnector) {
            switch (dbConnectorType) {
                case DbConnectorType_1.DbConnectorType.MYSQL:
                    this.dbConnector = new DbConnector_1.DbConnector(ResourcesConfig_1.ResourcesConfig.MYSQL_CONFIG, new MySQLStrategy_1.MySQLStrategy());
                    break;
                case DbConnectorType_1.DbConnectorType.MONGODB:
                    this.dbConnector = new DbConnector_1.DbConnector(ResourcesConfig_1.ResourcesConfig.MONGODB_CONFIG, new MongoDBStrategy_1.MongoDBStrategy());
                    break;
            }
        }
        return this.dbConnector;
    }
}
exports.DbConnectorFactory = DbConnectorFactory;
//# sourceMappingURL=DbConnectorFactory.js.map