import {Controller} from "../../controllers/Controller";
import {ServiceFactory} from "./ServiceFactory";
import {ClassListStrategy, ConstructorType} from "../reflection/ClassListStrategy";
import {Service} from "../../services/Service";

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

    public getController(controllerType: string): Controller | undefined{

        if(!controllerType){
            return undefined;
        }

        let controller: Controller | undefined;
        const controllerName = controllerType + "Controller";

        if(this.controllersArray){
            controller = this.controllersArray.find(controller => controller.constructor.name === controllerType.constructor.name);
        }
        if(!controller){
            const controllerClass : ConstructorType<Object> = this.classListStrategy.getClassConstructor(controllerName);
            const service: Service | undefined =  ServiceFactory.getInstance().getService(controllerType);
            if(service){
                controller =  <Controller> new controllerClass({service: service});
                this.controllersArray.push(controller);
            }
        }
        return controller;
    }
}
