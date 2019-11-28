import {ArticleSchema} from "../../models/mongoDB/ArticleSchema";
import {ArticleController} from "../../controllers/ArticleController";
import {ArticleService} from "../../services/ArticleService";
import {MongoDBStrategy} from "../database/MongoDBStrategy";
import {Article} from "../../models/Article";
import {ClassListStrategy, ConstructorType} from "./ClassListStrategy";


export class ClassList implements ClassListStrategy{

    private static instance: ClassList | undefined;
    private  classPrototypes: Map<string,ConstructorType<Object>>;


    constructor(){
        this.classPrototypes = new Map();
        this.setControllers();
        this.setSchemas();
        this.setServices();
        this.setServiceStrategies();
        this.setModels();
    }


    public static getInstance(): ClassList {
        if(!this.instance){
            this.instance = new ClassList();
        }
        return this.instance;
    }

    private setControllers(): void{
        this.addClass(ArticleController.name, ArticleController);
    }

    private setSchemas(): void{
        this.addClass(ArticleSchema.name, ArticleSchema);
    }

    private setServices(): void{
        this.addClass(ArticleService.name, ArticleService);
    }

    private setServiceStrategies(): void{
        this.addClass(MongoDBStrategy.name, MongoDBStrategy);
    }

    private setModels(): void{
        this.addClass(Article.name, Article);
    }

    public addClass(className: string, classPrototype: ConstructorType<Object> ): void{
        this.classPrototypes.set(className, classPrototype);
    }
    public getClass(className: string):  ConstructorType<Object>{
        return < ConstructorType<Object>>this.classPrototypes.get(className);
    }
}


