
export interface ServiceStrategy{

    getAll(query: any): Promise<any>

    insert(data: any): Promise<any>

    update(id: any, data: any): Promise<any>

    delete(id: any): Promise<any>
    getOne(id: any): Promise<any> ;

}
