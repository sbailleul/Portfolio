"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MongoDbConnect {
    connect(dbConnector) {
        try {
            dbConnector.dbConnection.connect(dbConnector.createConnectionString(), { useNewUrlParser: true, useUnifiedTopology: true });
        }
        catch (err) {
            throw err;
        }
        return true;
    }
}
exports.MongoDbConnect = MongoDbConnect;
