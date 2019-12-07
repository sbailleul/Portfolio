import {ConnectionStrategy} from "./ConnectionStrategy";

export class DbConnector{

    private _connectionConfig: any;
    private _connectionStrategy: ConnectionStrategy;

    constructor(connectionConfig: any, connectStrategy: ConnectionStrategy){
        this._connectionConfig = connectionConfig;
        this._connectionStrategy = connectStrategy;
    }


    get connectionConfig() {
        return this._connectionConfig;
    }


    get connectionStrategy(): ConnectionStrategy {
        return this._connectionStrategy;
    }

    connect(){
        try{
            this.connectionStrategy.connect(this);
        } catch(err){
            throw err;
        }
    }

}
