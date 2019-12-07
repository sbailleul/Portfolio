import {ArticleSchema} from "../../models/mongoose/ArticleSchema";
import {MongooseStrategy} from "../database/MongooseStrategy";
import {MongooseArticleService} from "../../services/servicesStrategies/mongoose/MongooseArticleService";
import {ClassList} from "./ClassList";


export class MongooseClassList extends ClassList{

    constructor(){
        super();
        this.setSchemas();
        this.setServiceStrategies();
    }

    private setSchemas(): void{
        this.addClass(ArticleSchema.name, ArticleSchema);
    }

    private setServiceStrategies(): void{
        this.addClass(MongooseStrategy.name, MongooseStrategy);
        this.addClass(MongooseArticleService.name, MongooseArticleService);
    }
}


