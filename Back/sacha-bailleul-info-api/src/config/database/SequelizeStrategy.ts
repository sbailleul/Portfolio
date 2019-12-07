import {ConnectionStrategy} from "./ConnectionStrategy";
import {DbConnector} from "./DbConnector";
import {Sequelize} from "sequelize";
import {SequelizeModelFactory} from "../rest/SequelizeModelFactory";

export class SequelizeStrategy  implements ConnectionStrategy{

    private sequelize: Sequelize | undefined;


    connect(dbConnector: DbConnector): boolean {

        const connectionConfig: any = dbConnector.connectionConfig;

        this.sequelize = new Sequelize(connectionConfig.db, connectionConfig.user, connectionConfig.password, {
            host: connectionConfig.host,
            dialect: connectionConfig.dialect
        });
        this.initModels();
        return true;
    }

    private initModels(){
        SequelizeModelFactory.getInstance().modelArray.forEach(model => model.init(this.sequelize));
    }
}
