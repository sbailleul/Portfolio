import {ServiceStrategy} from "../../services/servicesStrategies/ServiceStrategy";
import {ClassListStrategy, ConstructorType} from "../reflection/ClassListStrategy";
import {ObjectUtil} from "../../utils/ObjectUtil";
import {DbConnectorType} from "../database/DbConnectorType";

export class ServiceStrategyFactory{

    private static instance: ServiceStrategyFactory;
    private dbConnectorType: DbConnectorType;
    private classListStrategy: ClassListStrategy;

    constructor(data: {classListStrategy: ClassListStrategy, dbConnectorType: DbConnectorType}) {
        this.classListStrategy = data.classListStrategy;
        this.dbConnectorType = data.dbConnectorType;
    }

    public static getInstance(data?: {classListStrategy: ClassListStrategy, dbConnectorType: DbConnectorType}): ServiceStrategyFactory {
        if(!this.instance && data && ObjectUtil.isComplete(data)){
           this.instance = new ServiceStrategyFactory(data)
        }
        return this.instance;
    }

    public getServiceStrategy(serviceStrategyType: string): ServiceStrategy | undefined{
        if(!serviceStrategyType){
            return undefined;
        }
        let serviceStrategyName : string;
        serviceStrategyName = serviceStrategyType +  "Service";

        if(this.dbConnectorType === DbConnectorType.MONGOOSE || this.dbConnectorType === DbConnectorType.SEQUELIZE){
            serviceStrategyName = this.dbConnectorType.charAt(0).toUpperCase() + this.dbConnectorType.substr(1).toLowerCase()+ serviceStrategyName;
            const serviceStrategyClass: ConstructorType<Object> = this.classListStrategy.getClassConstructor(serviceStrategyName);
            if(serviceStrategyClass){
                return <ServiceStrategy> new serviceStrategyClass();
            }
        }
    }
}
