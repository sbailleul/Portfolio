"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ArticleSchema_1 = require("../models/mongoDB/ArticleSchema");
class ClassList {
    constructor() {
        this.classPrototypes = new Map();
        this.addClass(ArticleSchema_1.ArticleSchema.name, ArticleSchema_1.ArticleSchema);
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new ClassList();
        }
        return this.instance;
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