import Controller from "../../controllers/Controller";
import {ArticleController} from "../../controllers/ArticleController";
import {ServiceFactory} from "./ServiceFactory";
import {RestType} from "./RestType";
import {ClassListStrategy, ConstructorType} from "../reflection/ClassListStrategy";
import {ClassList} from "../reflection/ClassList";

export class ControllerFactory {

    private static instance: ControllerFactory;
    private controllersArray: Controller[];
    private classListStrategy: ClassListStrategy;


    private constructor(classListStrategy: ClassListStrategy){
        this.classListStrategy = classListStrategy;
        this.controllersArray = [];
    }

    public static getInstance(classListStrategy?: ClassListStrategy): ControllerFactory {
        if(!this.instance && classListStrategy ){
            this.instance = new ControllerFactory(classListStrategy);
        }
        return this.instance;
    }

    public getController(controllerType: RestType){

        let controller: Controller | undefined;
        const controllerName = controllerType + "Controller";
        let controllerClass: ConstructorType<Object>;


        if(this.controllersArray){
            controller = this.controllersArray.find(controller => controller.constructor.name === controllerType.constructor.name);
        }
        if(!controller){
            controllerClass = ClassList.getInstance().getClass(controllerName);
            controller =  <Controller> new controllerClass({serviceStrategy: ServiceFactory.getInstance().getService(controllerType)});
            this.controllersArray.push(controller);
        }
        return controller;
    }
}
