import SequelizeConfig from "./Sequelize.json";
import MongooseConfig from "./Mongoose.json";
import ExpressConfig from "./Express.json";
import GlobalConfig from "./GlobalConfig.json";

export class ResourcesConfig{
    public static SEQUELIZE_CONFIG = SequelizeConfig;
    public static MONGOOSE_CONFIG = MongooseConfig;
    public static EXPRESS_CONFIG = ExpressConfig;
    public static GLOBAL_CONFIG = GlobalConfig;
}
