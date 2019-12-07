import {DbConnector} from "./DbConnector";
import {ResourcesConfig} from "../../resources/ResourcesConfig";
import {SequelizeStrategy} from "./SequelizeStrategy";
import {MongooseStrategy} from "./MongooseStrategy";
import {DbConnectorType} from "./DbConnectorType";

export class DbConnectorFactory {

    private static instance: DbConnectorFactory;
    private dbConnector: DbConnector | undefined;
    private dbConnectorType: DbConnectorType;

    constructor(dbConnectorType: DbConnectorType) {
        this.dbConnectorType = dbConnectorType;
    }

    public static getInstance(dbConnectorType?: DbConnectorType): DbConnectorFactory{

        if(!this.instance && dbConnectorType){
            this.instance = new DbConnectorFactory(dbConnectorType);
        }
        return this.instance;
    }

    public getDbConnector(): DbConnector|undefined {

        if(!this.dbConnector){
            switch (this.dbConnectorType) {
                case DbConnectorType.SEQUELIZE:
                    this.dbConnector = new DbConnector(ResourcesConfig.SEQUELIZE_CONFIG, new SequelizeStrategy());
                    break;
                case DbConnectorType.MONGOOSE:
                    this.dbConnector = new DbConnector(ResourcesConfig.MONGOOSE_CONFIG,new MongooseStrategy());
                    break;
            }
        }
        return this.dbConnector;
    }
}
