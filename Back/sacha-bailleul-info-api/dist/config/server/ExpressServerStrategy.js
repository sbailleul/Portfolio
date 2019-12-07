"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const ObjectUtil_1 = require("../../utils/ObjectUtil");
class ExpressServerStrategy {
    constructor() {
        this.server = express_1.default();
        this.server.use(body_parser_1.default.json());
    }
    listen(serverConnector) {
        try {
            this.server.listen(serverConnector.port, () => {
                console.log(`app running on port ${serverConnector.port}`);
                // // console.log(ResourcesConfig.DB_CONFIG);
                // const dbConnector: DbConnector = DbConnectorFactory.getDbConnector(DbConnectorType.MONGODB);
                // const dbConnector2: DbConnector = DbConnectorFactory.getDbConnector();
                // dbConnector2.connect();
            });
        }
        catch (err) {
            throw err;
        }
    }
    route(data) {
        if (!ObjectUtil_1.ObjectUtil.isComplete(data)) {
            return;
        }
        const httpMethod = data.httpMethod.toLowerCase();
        const func = ObjectUtil_1.ObjectUtil.getObjectValueByKey(this.server, httpMethod);
        func.call(this.server, data.url, data.callback);
        console.log(httpMethod);
    }
}
exports.ExpressServerStrategy = ExpressServerStrategy;
//# sourceMappingURL=ExpressServerStrategy.js.map