"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ArticleSchema_1 = require("../../models/mongoDB/ArticleSchema");
const ArticleController_1 = require("../../controllers/ArticleController");
const ArticleService_1 = require("../../services/ArticleService");
const MongoDBStrategy_1 = require("../database/MongoDBStrategy");
const Article_1 = require("../../models/Article");
class ClassList {
    constructor() {
        this.classPrototypes = new Map();
        this.setControllers();
        this.setSchemas();
        this.setServices();
        this.setServiceStrategies();
        this.setModels();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new ClassList();
        }
        return this.instance;
    }
    setControllers() {
        this.addClass(ArticleController_1.ArticleController.name, ArticleController_1.ArticleController);
    }
    setSchemas() {
        this.addClass(ArticleSchema_1.ArticleSchema.name, ArticleSchema_1.ArticleSchema);
    }
    setServices() {
        this.addClass(ArticleService_1.ArticleService.name, ArticleService_1.ArticleService);
    }
    setServiceStrategies() {
        this.addClass(MongoDBStrategy_1.MongoDBStrategy.name, MongoDBStrategy_1.MongoDBStrategy);
    }
    setModels() {
        this.addClass(Article_1.Article.name, Article_1.Article);
    }
    addClass(className, classPrototype) {
        this.classPrototypes.set(className, classPrototype);
    }
    getClass(className) {
        return this.classPrototypes.get(className);
    }
}
exports.ClassList = ClassList;
//# sourceMappingURL=ClassList.js.map