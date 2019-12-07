"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ArticleController_1 = require("../../controllers/ArticleController");
const ArticleService_1 = require("../../services/ArticleService");
class ClassList {
    constructor() {
        this.classPrototypes = new Map();
        this.setControllers();
        this.setServices();
    }
    setControllers() {
        this.addClass(ArticleController_1.ArticleController.name, ArticleController_1.ArticleController);
    }
    setServices() {
        this.addClass(ArticleService_1.ArticleService.name, ArticleService_1.ArticleService);
    }
    addClass(className, classPrototype) {
        this.classPrototypes.set(className, classPrototype);
    }
    getClassConstructor(className) {
        return this.classPrototypes.get(className);
    }
    getClass(className) {
        return this.classPrototypes.get(className);
    }
}
exports.ClassList = ClassList;
//# sourceMappingURL=ClassList.js.map