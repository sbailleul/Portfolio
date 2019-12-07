"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MongoDBService_1 = require("./MongoDBService");
const ArticleSchema_1 = require("../../models/mongoDB/ArticleSchema");
class MongoDBArticleService extends MongoDBService_1.MongoDBService {
    constructor() {
        super({ schemaStrategy: new ArticleSchema_1.ArticleSchema() });
    }
}
exports.MongoDBArticleService = MongoDBArticleService;
//# sourceMappingURL=MongoDBArticleService.js.map