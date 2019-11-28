import {MongoDBService} from "./MongoDBService";
import {SchemaStrategy} from "../../models/mongoDB/SchemaStrategy";
import {ArticleSchema} from "../../models/mongoDB/ArticleSchema";

export class MongoDBArticleService extends MongoDBService{

    constructor(schemaStrategy: SchemaStrategy | undefined) {
        super(new ArticleSchema());
    }
}
