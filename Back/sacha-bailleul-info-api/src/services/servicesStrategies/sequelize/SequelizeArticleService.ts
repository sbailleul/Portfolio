import {SequelizeService} from "./SequelizeService";
import {SequelizeArticleModel} from "../../../models/sequelize/ArticleModel";

export class SequelizeArticleService extends SequelizeService {


    delete(id: any): Promise<any> {
        return SequelizeArticleModel.destroy({
            where:{
                id: id
            }
        });
    }

    getAll(query: any): Promise<any> {
        return SequelizeArticleModel.findAll();
    }

    getOne(id: any): Promise<any> {
        return super.getOne(id);
    }

    insert(data: any): Promise<any> {
        return super.insert(data);
    }

    update(id: any, data: any): Promise<any> {
        return super.update(id, data);
    }
}
