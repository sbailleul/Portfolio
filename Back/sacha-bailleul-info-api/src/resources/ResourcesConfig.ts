import MySQLConfig from "./MySQL.json";
import MongoDBConfig from "./MongoDB.json";
import ExpressConfig from "./Express.json";
import GlobalConfig from "./GlobalConfig.json";

export class ResourcesConfig{
    public static MYSQL_CONFIG = MySQLConfig;
    public static MONGODB_CONFIG = MongoDBConfig;
    public static EXPRESS_CONFIG = ExpressConfig;
    public static GLOBAL_CONFIG = GlobalConfig;
}
