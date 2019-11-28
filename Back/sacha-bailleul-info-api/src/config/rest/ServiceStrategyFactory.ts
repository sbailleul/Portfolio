import {ResourcesConfig} from "../../resources/ResourcesConfig";
import {DbConnectorType} from "../database/DbConnectorType";
import {ServiceStrategy} from "../../services/servicesStrategies/ServiceStrategy";
import {RestType} from "./RestType";
import {ClassListStrategy, ConstructorType} from "../reflection/ClassListStrategy";
import {ClassList} from "../reflection/ClassList";

export class ServiceStrategyFactory{

    private static instance: ServiceStrategyFactory;
    private classListStrategy: ClassListStrategy;

    constructor(classListStrategy: ClassListStrategy) {
        this.classListStrategy = classListStrategy;
    }

    public static getInstance(classListStrategy?: ClassListStrategy): ServiceStrategyFactory {
        if(!this.instance && classListStrategy){
           this.instance = new ServiceStrategyFactory(classListStrategy)
        }
        return this.instance;
    }

    public getServiceStrategy(serviceStrategyType: RestType): ServiceStrategy | undefined{
        let serviceStrategyName = serviceStrategyType + "Service";
        let serviceStrategyClass : ConstructorType<Object>;

        if(ResourcesConfig.GLOBAL_CONFIG.dbConnectorType === DbConnectorType.MONGODB ){
            serviceStrategyName = "MongoDB" + serviceStrategyName;
            serviceStrategyClass = ClassList.getInstance().getClass(serviceStrategyName);
            return <ServiceStrategy> new serviceStrategyClass();

        } else {
            throw new Error();
        }
    }
}
