"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MySQL_json_1 = __importDefault(require("./MySQL.json"));
const MongoDB_json_1 = __importDefault(require("./MongoDB.json"));
const Express_json_1 = __importDefault(require("./Express.json"));
const GlobalConfig_json_1 = __importDefault(require("./GlobalConfig.json"));
class ResourcesConfig {
}
exports.ResourcesConfig = ResourcesConfig;
ResourcesConfig.MYSQL_CONFIG = MySQL_json_1.default;
ResourcesConfig.MONGODB_CONFIG = MongoDB_json_1.default;
ResourcesConfig.EXPRESS_CONFIG = Express_json_1.default;
ResourcesConfig.GLOBAL_CONFIG = GlobalConfig_json_1.default;
//# sourceMappingURL=ResourcesConfig.js.map