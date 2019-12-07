"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DbConnector_1 = require("./DbConnector");
const ResourcesConfig_1 = require("../../resources/ResourcesConfig");
const SequelizeStrategy_1 = require("./SequelizeStrategy");
const MongooseStrategy_1 = require("./MongooseStrategy");
const DbConnectorType_1 = require("./DbConnectorType");
class DbConnectorFactory {
    constructor(dbConnectorType) {
        this.dbConnectorType = dbConnectorType;
    }
    static getInstance(dbConnectorType) {
        if (!this.instance && dbConnectorType) {
            this.instance = new DbConnectorFactory(dbConnectorType);
        }
        return this.instance;
    }
    getDbConnector() {
        if (!this.dbConnector) {
            switch (this.dbConnectorType) {
                case DbConnectorType_1.DbConnectorType.SEQUELIZE:
                    this.dbConnector = new DbConnector_1.DbConnector(ResourcesConfig_1.ResourcesConfig.SEQUELIZE_CONFIG, new SequelizeStrategy_1.SequelizeStrategy());
                    break;
                case DbConnectorType_1.DbConnectorType.MONGOOSE:
                    this.dbConnector = new DbConnector_1.DbConnector(ResourcesConfig_1.ResourcesConfig.MONGOOSE_CONFIG, new MongooseStrategy_1.MongooseStrategy());
                    break;
            }
        }
        return this.dbConnector;
    }
}
exports.DbConnectorFactory = DbConnectorFactory;
//# sourceMappingURL=DbConnectorFactory.js.map