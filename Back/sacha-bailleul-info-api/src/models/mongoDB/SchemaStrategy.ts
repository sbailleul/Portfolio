import {Document, Schema, Model} from "mongoose";

export interface SchemaStrategy {

    createSchema(): Schema;

    getModel():Model<Document>;

}
