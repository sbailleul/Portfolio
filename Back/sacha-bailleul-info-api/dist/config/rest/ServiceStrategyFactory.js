"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ObjectUtil_1 = require("../../utils/ObjectUtil");
const DbConnectorType_1 = require("../database/DbConnectorType");
class ServiceStrategyFactory {
    constructor(data) {
        this.classListStrategy = data.classListStrategy;
        this.dbConnectorType = data.dbConnectorType;
    }
    static getInstance(data) {
        if (!this.instance && data && ObjectUtil_1.ObjectUtil.isComplete(data)) {
            this.instance = new ServiceStrategyFactory(data);
        }
        return this.instance;
    }
    getServiceStrategy(serviceStrategyType) {
        if (!serviceStrategyType) {
            return undefined;
        }
        let serviceStrategyName;
        serviceStrategyName = serviceStrategyType + "Service";
        if (this.dbConnectorType === DbConnectorType_1.DbConnectorType.MONGOOSE || this.dbConnectorType === DbConnectorType_1.DbConnectorType.SEQUELIZE) {
            serviceStrategyName = this.dbConnectorType.charAt(0).toUpperCase() + this.dbConnectorType.substr(1).toLowerCase() + serviceStrategyName;
            const serviceStrategyClass = this.classListStrategy.getClassConstructor(serviceStrategyName);
            if (serviceStrategyClass) {
                return new serviceStrategyClass();
            }
        }
    }
}
exports.ServiceStrategyFactory = ServiceStrategyFactory;
//# sourceMappingURL=ServiceStrategyFactory.js.map