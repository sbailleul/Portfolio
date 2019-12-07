import {Service} from "../../services/Service";
import {ServiceStrategyFactory} from "./ServiceStrategyFactory";
import {ClassListStrategy, ConstructorType} from "../reflection/ClassListStrategy";

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


    public  getService(serviceType: string): Service | undefined{

        let service: Service | undefined;
        if(!serviceType){
            return undefined;
        }
        const serviceName = serviceType +  "Service";

        if(this.serviceArray){
            service = this.serviceArray.find(service => service.constructor.name === serviceName);
        }

        if(!service){
            const serviceClass: ConstructorType<Object> = this.classListStrategy.getClassConstructor(serviceName);
            try{
                service =  <Service> new serviceClass({serviceStrategy: ServiceStrategyFactory.getInstance().getServiceStrategy(serviceType)});
            } catch{
                throw new Error('Can\'t instantiate service class : ' + serviceName);
            }
            this.serviceArray.push(service);
        }
        return service;

    }
}
