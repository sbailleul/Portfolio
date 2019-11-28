import {Document, model, Model, Schema} from "mongoose";
import {SchemaStrategy} from "./SchemaStrategy";
import {ArticleDoc} from "./ArticleDoc";
import getPrototypeOf = Reflect.getPrototypeOf;
import {ClassList, listClass} from "../../config/reflection/ClassList";


export class ArticleSchema implements SchemaStrategy {

    createSchema(): Schema {
        return new Schema({
            id: {type: String, required: true, unique: true},

        });
    }

    getModel():Model<Document> {
        return model<ArticleDoc>('Article',this.createSchema());
    }

}

