import {ConnectionStrategy} from "./ConnectionStrategy";
import {DbConnector} from "./DbConnector";
import * as Url from "url";
import {DbConnection} from "./DbConnection";

export class MongoDBStrategy extends DbConnection implements ConnectionStrategy{


    constructor(){
        super();
        this.module = require("mongoose");
    }

    connect(dbConnector: DbConnector): boolean {
        try{
            this.module.connect(this.createConnectionString(dbConnector), { useNewUrlParser: true, useUnifiedTopology: true  } );
        } catch(err) {
            throw err;
        }
        return true;
    }

    createConnectionString(dbConnector: DbConnector): string {

        const connectionString = new URL("mongodb://");

        connectionString.host = dbConnector.host;
        connectionString.username = dbConnector.user;
        connectionString.password = dbConnector.password;
        connectionString.pathname = dbConnector.db;
        console.log("CONNECTION STRING : " + connectionString);

        return connectionString.toString();
    }

}
