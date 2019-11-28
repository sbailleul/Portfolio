import {ConnectionStrategy} from "./ConnectionStrategy";

export class DbConnector{

    private _host: string;
    private _user: string;
    private _password: string;
    private _db: string;
    private _connectionStrategy: ConnectionStrategy;

    constructor(data: {host?: string, user?: string, password?: string, db?: string}, connectStrategy: ConnectionStrategy){
        this._host = data.host ? data.host : "";
        this._user = data.user ? data.user : "";
        this._password = data.password ? data.password : "";
        this._db = data.db ? data.db : "";
        this._connectionStrategy = connectStrategy;
    }


    get host(): string {
        return this._host;
    }

    get user(): string {
        return this._user;
    }

    get password(): string {
        return this._password;
    }

    get db(): string {
        return this._db;
    }

    set db(value: string) {
        this._db = value;
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
