"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DbConnection_1 = require("./DbConnection");
class MySQLStrategy extends DbConnection_1.DbConnection {
    constructor() {
        super();
        this.module = require("mysql");
    }
    connect(dbConnector) {
        this.initConnection(dbConnector);
        try {
            this.connection.connect(function (err) {
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
    initConnection(dbConnector) {
        this.connection = this.module.createConnection({
            host: dbConnector.host,
            user: dbConnector.user,
            password: dbConnector.password
        });
    }
}
exports.MySQLStrategy = MySQLStrategy;
//# sourceMappingURL=MySQLStrategy.js.map