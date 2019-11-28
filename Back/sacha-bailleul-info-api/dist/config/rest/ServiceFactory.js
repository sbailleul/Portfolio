"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServiceStrategyFactory_1 = require("./ServiceStrategyFactory");
const ClassList_1 = require("../reflection/ClassList");
class ServiceFactory {
    constructor(classListStrategy) {
        this.classListStrategy = classListStrategy;
        this.serviceArray = [];
    }
    static getInstance(classListStrategy) {
        if (!this.instance && classListStrategy) {
            this.instance = new ServiceFactory(classListStrategy);
        }
        return this.instance;
    }
    getService(serviceType) {
        let service;
        const serviceName = serviceType + "Service";
        let serviceClass;
        if (this.serviceArray) {
            service = this.serviceArray.find(controller => controller.constructor.name === serviceType.constructor.name);
        }
        if (!service) {
            serviceClass = ClassList_1.ClassList.getInstance().getClass(serviceName);
            service = new serviceClass({ serviceStrategy: ServiceStrategyFactory_1.ServiceStrategyFactory.getInstance().getServiceStrategy(serviceType) });
            this.serviceArray.push(service);
        }
        return service;
    }
}
exports.ServiceFactory = ServiceFactory;
//# sourceMappingURL=ServiceFactory.js.map