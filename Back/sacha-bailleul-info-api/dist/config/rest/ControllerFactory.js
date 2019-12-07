"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServiceFactory_1 = require("./ServiceFactory");
class ControllerFactory {
    constructor(classListStrategy) {
        this.classListStrategy = classListStrategy;
        this.controllersArray = [];
    }
    static getInstance(classListStrategy) {
        if (!this.instance && classListStrategy) {
            this.instance = new ControllerFactory(classListStrategy);
        }
        return this.instance;
    }
    getController(controllerType) {
        if (!controllerType) {
            return undefined;
        }
        let controller;
        const controllerName = controllerType + "Controller";
        if (this.controllersArray) {
            controller = this.controllersArray.find(controller => controller.constructor.name === controllerType.constructor.name);
        }
        if (!controller) {
            const controllerClass = this.classListStrategy.getClassConstructor(controllerName);
            const service = ServiceFactory_1.ServiceFactory.getInstance().getService(controllerType);
            if (service) {
                controller = new controllerClass({ service: service });
                this.controllersArray.push(controller);
            }
        }
        return controller;
    }
}
exports.ControllerFactory = ControllerFactory;
//# sourceMappingURL=ControllerFactory.js.map