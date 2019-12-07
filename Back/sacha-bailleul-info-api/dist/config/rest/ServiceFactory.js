"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServiceStrategyFactory_1 = require("./ServiceStrategyFactory");
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
        if (!serviceType) {
            return undefined;
        }
        const serviceName = serviceType + "Service";
        if (this.serviceArray) {
            service = this.serviceArray.find(service => service.constructor.name === serviceName);
        }
        if (!service) {
            const serviceClass = this.classListStrategy.getClassConstructor(serviceName);
            try {
                service = new serviceClass({ serviceStrategy: ServiceStrategyFactory_1.ServiceStrategyFactory.getInstance().getServiceStrategy(serviceType) });
            }
            catch (_a) {
                throw new Error('Can\'t instantiate service class : ' + serviceName);
            }
            this.serviceArray.push(service);
        }
        return service;
    }
}
exports.ServiceFactory = ServiceFactory;
//# sourceMappingURL=ServiceFactory.js.map