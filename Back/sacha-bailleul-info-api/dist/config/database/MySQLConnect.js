"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MySQLConnect {
    connect(dbConnector) {
        try {
            dbConnector.dbConnection.connect(function (err) {
                if (err) {
                    throw err;
                }
            });
        }
        catch (err) {
            throw err;
        }
        return true;
    }
}
exports.MySQLConnect = MySQLConnect;
