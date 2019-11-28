"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DbConnector_1 = require("./DbConnector");
const MongoDbConnect_1 = require("./MongoDbConnect");
class MongoDBConnector extends DbConnector_1.DbConnector {
    constructor(data) {
        super(data);
        this._dbConnect = new MongoDbConnect_1.MongoDbConnect();
        this.initConnection();
    }
    initConnection() {
        this.dbConnection = require("mongoose");
    }
    createConnectionString() {
        const connectionString = new URL("mongodb://");
        connectionString.host = this.host;
        connectionString.username = this.user;
        connectionString.password = this.password;
        connectionString.pathname = this.db;
        console.log("CONNECTION STRING : " + connectionString);
        return connectionString.toString();
    }
}
exports.MongoDBConnector = MongoDBConnector;
