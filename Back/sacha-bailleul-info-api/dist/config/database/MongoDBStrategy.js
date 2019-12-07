"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DbConnection_1 = require("./DbConnection");
class MongoDBStrategy extends DbConnection_1.DbConnection {
    constructor() {
        super();
        this.module = require("mongoose");
    }
    connect(dbConnector) {
        try {
            this.module.connect(this.createConnectionString(dbConnector), {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            });
        }
        catch (err) {
            throw err;
        }
        return true;
    }
    createConnectionString(dbConnector) {
        const connectionString = new URL("mongodb://");
        connectionString.host = dbConnector.host;
        connectionString.username = dbConnector.user;
        connectionString.password = dbConnector.password;
        connectionString.pathname = dbConnector.db;
        console.log("CONNECTION STRING : " + connectionString);
        return connectionString.toString();
    }
}
exports.MongoDBStrategy = MongoDBStrategy;
//# sourceMappingURL=MongoDBStrategy.js.map