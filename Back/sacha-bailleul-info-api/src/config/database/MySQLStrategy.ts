import {ConnectionStrategy} from "./ConnectionStrategy";
import {DbConnector} from "./DbConnector";
import {DbConnection} from "./DbConnection";

export class MySQLStrategy extends DbConnection implements ConnectionStrategy{

    constructor(){
        super();
        this.module= require("mysql");
    }

    connect(dbConnector: DbConnector): boolean {

        this.initConnection(dbConnector);

        try{
            this.connection.connect(function(err: any){
                if(err){
                    throw err;
                }
            });
        } catch(err) {
            throw err;
        }
        return true;
    }

    initConnection(dbConnector: DbConnector): void {
        this.connection = this.module.createConnection({
            host: dbConnector.host,
            user: dbConnector.user,
            password: dbConnector.password
        });
    }


}
