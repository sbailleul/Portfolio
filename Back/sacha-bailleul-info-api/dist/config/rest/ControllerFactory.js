"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServiceFactory_1 = require("./ServiceFactory");
const ClassList_1 = require("../reflection/ClassList");
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
        let controller;
        const controllerName = controllerType + "Controller";
        let controllerClass;
        if (this.controllersArray) {
            controller = this.controllersArray.find(controller => controller.constructor.name === controllerType.constructor.name);
        }
        if (!controller) {
            controllerClass = ClassList_1.ClassList.getInstance().getClass(controllerName);
            controller = new controllerClass({ serviceStrategy: ServiceFactory_1.ServiceFactory.getInstance().getService(controllerType) });
            this.controllersArray.push(controller);
        }
        return controller;
    }
}
exports.ControllerFactory = ControllerFactory;
//# sourceMappingURL=ControllerFactory.js.map