import {ControllerFactory} from "../rest/ControllerFactory";
import {ServiceFactory} from "../rest/ServiceFactory";
import {ServiceStrategyFactory} from "../rest/ServiceStrategyFactory";
import {ResourcesConfig} from "../../resources/ResourcesConfig";
import {ObjectUtil} from "../../utils/ObjectUtil";
import {DbConnectorType} from "../database/DbConnectorType";
import {ServerType} from "../server/ServerType";
import {DbConnectorFactory} from "../database/DbConnectorFactory";
import {ServerFactory} from "../server/ServerFactory";
import {ClassListFactory} from "../rest/ClassListFactory";
import {ClassListStrategy} from "./ClassListStrategy";
import {SequelizeModelFactory} from "../rest/SequelizeModelFactory";

export class FactoryInstantiator{

    public static instantiateFactories(){

        const dbConnectorType: DbConnectorType = ObjectUtil.getObjectValueByKey(DbConnectorType,ResourcesConfig.GLOBAL_CONFIG.dbConnectorType);
        const serverType: ServerType = ObjectUtil.getObjectValueByKey(ServerType,ResourcesConfig.GLOBAL_CONFIG.serverType);
        const classList: ClassListStrategy | undefined = ClassListFactory.getInstance(dbConnectorType).classList;

        if(!classList){
            throw Error('No ClassList to init factories');
        }
        if(dbConnectorType === DbConnectorType.SEQUELIZE){
            SequelizeModelFactory.getInstance(classList);
        }
        ControllerFactory.getInstance(classList);
        ServiceFactory.getInstance(classList);
        ServiceStrategyFactory.getInstance({classListStrategy: classList, dbConnectorType: dbConnectorType});
        DbConnectorFactory.getInstance(dbConnectorType);
        ServerFactory.getInstance(serverType);
    }

}
