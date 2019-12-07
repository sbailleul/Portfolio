import {ServiceStrategy} from "../ServiceStrategy";

export class SequelizeService implements ServiceStrategy{

    delete(id: any): Promise<any> {
        return new Promise<any>(resolve => {});
    }

    getAll(query: any): Promise<any> {
        return new Promise<any>(resolve => {});
    }

    getOne(id: any): Promise<any> {
        return new Promise<any>(resolve => {});
    }

    insert(data: any): Promise<any> {
        return new Promise<any>(resolve => {});
    }

    update(id: any, data: any): Promise<any> {
        return new Promise<any>(resolve => {});
    }
}
