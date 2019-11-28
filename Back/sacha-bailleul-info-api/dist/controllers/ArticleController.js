"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Controller_1 = __importDefault(require("./Controller"));
const ArticleService_1 = require("../services/ArticleService");
const MongoDBService_1 = require("../services/servicesStrategies/MongoDBService");
const ArticleSchema_1 = require("../models/mongoDB/ArticleSchema");
class ArticleController extends Controller_1.default {
    constructor(service) {
        super(service);
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        else {
            this.instance = new ArticleController(new ArticleService_1.ArticleService(new MongoDBService_1.MongoDBService(new ArticleSchema_1.ArticleSchema())));
        }
    }
}
exports.ArticleController = ArticleController;
//# sourceMappingURL=ArticleController.js.map