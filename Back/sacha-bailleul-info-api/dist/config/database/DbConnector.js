"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DbConnector {
    constructor(data, connectStrategy) {
        this._host = data.host ? data.host : "";
        this._user = data.user ? data.user : "";
        this._password = data.password ? data.password : "";
        this._db = data.db ? data.db : "";
        this._connectionStrategy = connectStrategy;
    }
    get host() {
        return this._host;
    }
    get user() {
        return this._user;
    }
    get password() {
        return this._password;
    }
    get db() {
        return this._db;
    }
    set db(value) {
        this._db = value;
    }
    get connectionStrategy() {
        return this._connectionStrategy;
    }
    connect() {
        try {
            this.connectionStrategy.connect(this);
        }
        catch (err) {
            throw err;
        }
    }
}
exports.DbConnector = DbConnector;
//# sourceMappingURL=DbConnector.js.map