import Service from "../../services/Service";
import {ResourcesConfig} from "../../resources/ResourcesConfig";
import {ServiceStrategyFactory} from "./ServiceStrategyFactory";
import {SchemaStrategy} from "../../models/mongoDB/SchemaStrategy";
import {RestType} from "./RestType";
import {ClassList} from "../reflection/ClassList";
import {ClassListStrategy, ConstructorType} from "../reflection/ClassListStrategy";
import {ServiceStrategy} from "../../services/servicesStrategies/ServiceStrategy";

export class ServiceFactory{

    private static instance: ServiceFactory;
    private serviceArray: Service[];
    private classListStrategy: ClassListStrategy;

    constructor(classListStrategy: ClassListStrategy) {
        this.classListStrategy = classListStrategy;
        this.serviceArray = [];
    }

    public static getInstance(classListStrategy?: ClassListStrategy): ServiceFactory {
        if(!this.instance && classListStrategy){
            this.instance = new ServiceFactory(classListStrategy)
        }
        return this.instance;
    }


    public  getService(serviceType: RestType): Service | undefined{

        let service: Service | undefined;
        const serviceName = serviceType + "Service";
        let serviceClass: ConstructorType<Object>;

        if(this.serviceArray){
            service = this.serviceArray.find(controller => controller.constructor.name === serviceType.constructor.name);
        }

        if(!service){
            serviceClass = ClassList.getInstance().getClass(serviceName);
            service =  <Service> new serviceClass({serviceStrategy: ServiceStrategyFactory.getInstance().getServiceStrategy(serviceType)});
            this.serviceArray.push(service);
        }
        return service;

    }
}
