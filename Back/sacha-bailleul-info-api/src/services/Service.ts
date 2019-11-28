import * as mongoose from "mongoose";
import {SimpleModel} from "../models/SimpleModel";
import {ServiceStrategy} from "./servicesStrategies/ServiceStrategy";

class Service {

    protected instance: Service | undefined;
    protected serviceStrategy: ServiceStrategy;

    constructor(data:{serviceStrategy: ServiceStrategy}) {
        this.serviceStrategy = data.serviceStrategy;
        this.getAll = this.getAll.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async getAll(query: any):Promise<any> {
       return this.serviceStrategy.getAll(query);
    }

    async insert(data: SimpleModel): Promise<any> {
        return this.serviceStrategy.insert(data);
    }

    async update(id:any, data: SimpleModel) {
        return this.serviceStrategy.update(id, data);
    }

    async delete(id:any) {
        return this.serviceStrategy.delete(id);
    }
}

export default Service;
