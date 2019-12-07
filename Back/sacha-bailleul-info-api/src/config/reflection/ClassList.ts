import {ArticleController} from "../../controllers/ArticleController";
import {ArticleService} from "../../services/ArticleService";
import {ClassListStrategy, ConstructorType} from "./ClassListStrategy";

export class ClassList implements ClassListStrategy{

    private  classPrototypes: Map<string,ConstructorType<Object>>;

    constructor() {
        this.classPrototypes = new Map();
        this.setControllers();
        this.setServices();
    }

    private setControllers(): void{
        this.addClass(ArticleController.name, ArticleController);
    }
    private setServices(): void{
        this.addClass(ArticleService.name, ArticleService);
    }
    public addClass(className: string, classPrototype: ConstructorType<Object> ): void{
        this.classPrototypes.set(className, classPrototype);
    }
    public getClassConstructor(className: string):  ConstructorType<Object>{
        return < ConstructorType<Object>>this.classPrototypes.get(className);
    }

    getClass(className: string): any {
        return this.classPrototypes.get(className);
    }


}
