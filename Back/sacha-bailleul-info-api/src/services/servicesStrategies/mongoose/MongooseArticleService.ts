import {MongooseService} from "./MongooseService";
import {ArticleSchema} from "../../../models/mongoose/ArticleSchema";

export class MongooseArticleService extends MongooseService{

    constructor() {
        super({schemaStrategy: new ArticleSchema()});
    }
}
