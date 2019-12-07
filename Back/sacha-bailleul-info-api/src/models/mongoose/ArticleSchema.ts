import {Document, model, Model, Schema} from "mongoose";
import {SchemaStrategy} from "./SchemaStrategy";
import {ArticleDoc} from "./ArticleDoc";


export class ArticleSchema implements SchemaStrategy {

    createSchema(): Schema {
        return new Schema({
            id: {type: Number, unique: true},
            content: {type: String, required: true},
            type : {type: String, required: true},
            layer_order :{type: Number, required: true},
        },{versionKey: false} );
    }

    getModel():Model<Document> {
        return model<ArticleDoc>('articles',this.createSchema());
    }

}

