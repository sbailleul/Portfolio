import {ServiceStrategy} from "./servicesStrategies/ServiceStrategy";
import {ObjectUtil} from "../utils/ObjectUtil";

export class Service {

    protected serviceStrategy: ServiceStrategy;

    constructor(data:{serviceStrategy: ServiceStrategy}) {
        if(!ObjectUtil.isComplete(data)){
            throw new Error('No service strategy to instantiate Service class');
        }
        this.serviceStrategy = data.serviceStrategy;
        this.getAll = this.getAll.bind(this);
        this.getOne = this.getOne.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async getOne(id: any): Promise<any> {
        return this.serviceStrategy.getOne(id);
    }

    async getAll(query: any): Promise<any> {
       return this.serviceStrategy.getAll(query);
    }

    async insert(data: any): Promise<any> {
        return this.serviceStrategy.insert(data);
    }

    async update(id:any, data: any): Promise<any>  {
        return this.serviceStrategy.update(id, data);
    }

    async delete(id:any): Promise<any>  {
        return this.serviceStrategy.delete(id);
    }
}
