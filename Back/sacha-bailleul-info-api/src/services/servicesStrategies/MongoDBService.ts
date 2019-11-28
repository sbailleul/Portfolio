import {ServiceStrategy} from "./ServiceStrategy";
import * as mongoose from "mongoose";
import {Document, Model} from "mongoose";
import {SchemaStrategy} from "../../models/mongoDB/SchemaStrategy";
import {ArticleDoc} from "../../models/mongoDB/ArticleDoc";
import {SimpleModel} from "../../models/SimpleModel";


export class MongoDBService implements ServiceStrategy{

    protected model: Model<Document> | undefined;

    constructor(schemaStrategy: SchemaStrategy | undefined){

        if(schemaStrategy){
            this.model = schemaStrategy.getModel();
        }
    }

    async delete(id: any) {
        if(!this.model){
            return;
        }
        try {
            let item = await this.model.findByIdAndDelete(id);
            if (!item)
                return {
                    error: true,
                    statusCode: 404,
                    message: "item not found"
                };

            return {
                error: false,
                deleted: true,
                statusCode: 202,
                item
            };
        } catch (error) {
            return {
                error: true,
                statusCode: 500,
                errors: error.errors
            };
        }
    }

    async getAll(query: any) {
        if(!this.model){
            return;
        }
        let { skip, limit } = query;

        skip = skip ? Number(skip) : 0;
        limit = limit ? Number(limit) : 10;

        delete query.skip;
        delete query.limit;

        if (query._id) {
            try {
                query._id = new mongoose.mongo.ObjectId(query._id);
            } catch (error) {
                console.log("not able to generate mongoose id with content", query._id);
            }
        }

        try {
            let items = await this.model
                .find(query)
                .skip(skip)
                .limit(limit);
            // let total = await this.model.count();
            return {
                error: false,
                statusCode: 200,
                data: items
            };
            // return {
            //     error: false,
            //     statusCode: 200,
            //     data: items,
            //     total
            // };
        } catch (error) {
            return {
                error: true,
                statusCode: 500,
                errors: error.errors
            };
        }
    }

    async insert(data: SimpleModel) {
        if(!this.model){
            return;
        }
        try {
            let item = await this.model.create(data);
            if (item)
                return {
                    error: false,
                    item
                };
        } catch (error) {
            console.log("error", error);
            return {
                error: true,
                statusCode: 500,
                message: error.errmsg || "Not able to create item",
                errors: error.errors
            };
        }
    }

    async update(id: any, data: SimpleModel) {
        if(!this.model){
            return;
        }
        try {
            let item = await this.model.findByIdAndUpdate(id, data, { new: true });
            return {
                error: false,
                statusCode: 202,
                item
            };
        } catch (error) {
            return {
                error: true,
                statusCode: 500,
                errors: error.errors
            };
        }
    }
}
