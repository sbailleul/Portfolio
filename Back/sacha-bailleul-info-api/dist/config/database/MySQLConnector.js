"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DbConnector_1 = require("./DbConnector");
const MySQLConnect_1 = require("./MySQLConnect");
class MySQLConnector extends DbConnector_1.DbConnector {
    constructor(data) {
        super(data);
        this._dbConnect = new MySQLConnect_1.MySQLConnect();
        this.initConnection();
    }
    initConnection() {
        const mysql = require("mysql");
        this.dbConnection = mysql.createConnection({
            host: this.host,
            user: this.user,
            password: this.password
        });
    }
    createConnectionString() {
        return "";
    }
}
exports.MySQLConnector = MySQLConnector;
