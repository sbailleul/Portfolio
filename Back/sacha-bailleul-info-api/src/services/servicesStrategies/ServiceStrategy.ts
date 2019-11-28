import {SimpleModel} from "../../models/SimpleModel";

export interface ServiceStrategy{

    getAll(query: any): any;
    insert(data: SimpleModel): any;

    update(id: any, data: SimpleModel): any;

    delete(id: any): any;
}
