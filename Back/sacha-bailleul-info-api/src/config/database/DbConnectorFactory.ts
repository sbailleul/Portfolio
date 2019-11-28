import {DbConnector} from "./DbConnector";
import {DbConnectorType} from "./DbConnectorType";
import {ResourcesConfig} from "../../resources/ResourcesConfig";
import {MySQLStrategy} from "./MySQLStrategy";
import {MongoDBStrategy} from "./MongoDBStrategy";

export class DbConnectorFactory {

    private static dbConnector: DbConnector;

    public static getDbConnector(dbConnectorType?: DbConnectorType): DbConnector {

        if (!this.dbConnector){
            switch (dbConnectorType) {
                case DbConnectorType.MYSQL:
                    this.dbConnector = new DbConnector(ResourcesConfig.MYSQL_CONFIG, new MySQLStrategy());
                    break;
                case DbConnectorType.MONGODB:
                    this.dbConnector = new DbConnector(ResourcesConfig.MONGODB_CONFIG,new MongoDBStrategy());
                    break;
            }
        }
        return this.dbConnector;
    }
}
