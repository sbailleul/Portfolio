import {Service} from "../services/Service";
import {Request, Response} from "express";
import {ObjectUtil} from "../utils/ObjectUtil";

export class Controller {

    protected service: Service;

    constructor(data:{service: Service}) {
        if(!ObjectUtil.isComplete(data)){
            throw new Error();
        }
        this.service = data.service;
        this.getOne = this.getOne.bind(this);
        this.getAll = this.getAll.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async getOne(req: Request, res: Response): Promise<any>  {
        const { id } = req.params;
        return res.status(200).send(await this.service.getOne(id));
    }

    async getAll(req: Request, res: Response): Promise<any>  {
        return res.status(200).send(await this.service.getAll(req.query));
    }

    async insert(req: Request, res: Response): Promise<any>  {
        let response = await this.service.insert(req.body);
        if (response.error){
            return res.status(response.statusCode).send(response);
        }
        return res.status(201).send(response);
    }

    async update(req: Request, res: Response): Promise<any>  {
        const { id } = req.params;

        let response = await this.service.update(id, req.body);

        return res.status(response.statusCode).send(response);
    }

    async delete(req: Request, res: Response): Promise<any>  {
        const { id } = req.params;

        let response = await this.service.delete(id);

        return res.status(response.statusCode).send(response);
    }

}
