import {ServerFactory} from "./config/server/ServerFactory";
import {FactoryInstantiator} from "./config/reflection/FactoryInstantiator";
import {DbConnectorFactory} from "./config/database/DbConnectorFactory";


FactoryInstantiator.instantiateFactories();

const dbConnector = DbConnectorFactory.getInstance().getDbConnector();
const serverConnector =  ServerFactory.getInstance().getServerConnector();

if(dbConnector && serverConnector){
    serverConnector.setRoutes();
    dbConnector.connect();
    serverConnector.listen();
}


