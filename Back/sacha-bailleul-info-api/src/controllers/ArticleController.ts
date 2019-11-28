import Controller from "./Controller";
import Service from "../services/Service";
import {ArticleService} from "../services/ArticleService";
import {MongoDBService} from "../services/servicesStrategies/MongoDBService";
import {ArticleSchema} from "../models/mongoDB/ArticleSchema";

export class ArticleController extends Controller{

    private static instance: ArticleController;

    public static getInstance(): ArticleController{
        if(this.instance){
            return this.instance;
        } else {
            this.instance = new ArticleController(new ArticleService( new MongoDBService(new ArticleSchema())));
        }

    }
    constructor(service: Service) {
        super(service);
    }
}
