"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ControllerFactory_1 = require("./ControllerFactory");
const ClassList_1 = require("../reflection/ClassList");
const ServiceFactory_1 = require("./ServiceFactory");
const ServiceStrategyFactory_1 = require("./ServiceStrategyFactory");
class FactoryInstanciator {
    static instantiateFactories() {
        ControllerFactory_1.ControllerFactory.getInstance(ClassList_1.ClassList.getInstance());
        ServiceFactory_1.ServiceFactory.getInstance(ClassList_1.ClassList.getInstance());
        ServiceStrategyFactory_1.ServiceStrategyFactory.getInstance(ClassList_1.ClassList.getInstance());
    }
}
exports.FactoryInstanciator = FactoryInstanciator;
//# sourceMappingURL=FactoryInstanciator.js.map