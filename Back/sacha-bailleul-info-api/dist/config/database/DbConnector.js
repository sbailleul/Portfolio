"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DbConnector {
    constructor(connectionConfig, connectStrategy) {
        this._connectionConfig = connectionConfig;
        this._connectionStrategy = connectStrategy;
    }
    get connectionConfig() {
        return this._connectionConfig;
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