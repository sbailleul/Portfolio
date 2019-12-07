import {ClassList} from "./ClassList";
import {ArticleModel} from "../../models/sequelize/ArticleModel";
import {ConstructorType} from "./ClassListStrategy";
import {MongooseStrategy} from "../database/MongooseStrategy";
import {MongooseArticleService} from "../../services/servicesStrategies/mongoose/MongooseArticleService";
import {SequelizeStrategy} from "../database/SequelizeStrategy";
import {SequelizeArticleService} from "../../services/servicesStrategies/sequelize/SequelizeArticleService";

export class SequelizeClassList extends ClassList{

    private modelNames: string[];

    constructor(){
        super();
        this.modelNames = [];
        this.setModels();
        this.setServiceStrategies();
    }

    private setModels(): void{
        this.addModelClass(ArticleModel.name,ArticleModel);
    }

    private addModelClass(modelName: string, classPrototype: ConstructorType<Object>):void {
        this.addClass(modelName ,classPrototype);
        this.modelNames.push(modelName);
    }

    public getModels(): ConstructorType<Object>[] {
        const modelArray : ConstructorType<Object>[] = [];
        this.modelNames.forEach(name => modelArray.push(this.getClass(name)));
        return modelArray;
    }
    private setServiceStrategies(): void{
        this.addClass(SequelizeStrategy.name, SequelizeStrategy);
        this.addClass(SequelizeArticleService.name, SequelizeArticleService);
    }

}
