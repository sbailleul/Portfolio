"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ResourcesConfig_1 = require("../../resources/ResourcesConfig");
const DbConnectorType_1 = require("../../config/database/DbConnectorType");
const ClassList_1 = require("../../config/reflection/ClassList");
class ServiceStrategyFactory {
    constructor(classListStrategy) {
        this.classListStrategy = classListStrategy;
    }
    static getInstance(classListStrategy) {
        if (!this.instance && classListStrategy) {
            this.instance = new ServiceStrategyFactory(classListStrategy);
        }
        return this.instance;
    }
    getServiceStrategy(serviceStrategyType) {
        let serviceStrategyName = serviceStrategyType + "Service";
        let serviceStrategyClass;
        if (ResourcesConfig_1.ResourcesConfig.GLOBAL_CONFIG.dbConnectorType === DbConnectorType_1.DbConnectorType.MONGODB) {
            serviceStrategyName = "MongoDB" + serviceStrategyName;
            serviceStrategyClass = ClassList_1.ClassList.getInstance().getClass(serviceStrategyName);
            return new serviceStrategyClass();
        }
        else {
            throw new Error();
        }
    }
}
exports.ServiceStrategyFactory = ServiceStrategyFactory;
//# sourceMappingURL=ServiceStrategyFactory.js.map