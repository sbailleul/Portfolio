import {ConnectionStrategy} from "./ConnectionStrategy";
import {DbConnector} from "./DbConnector";

export class MongooseStrategy  implements ConnectionStrategy{

    private mongoose : any;
    constructor(){
        this.mongoose = require('mongoose');
    }

    connect(dbConnector: DbConnector): boolean {
        try{
            this.mongoose.connect(this.createConnectionString(dbConnector), {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true} );
        } catch(err) {
            throw err;
        }
        return true;
    }

    createConnectionString(dbConnector: DbConnector): string {

        const connectionString = new URL("mongodb://");
        const connectionConfig: any = dbConnector.connectionConfig;
        connectionString.host = connectionConfig.host;
        connectionString.username = connectionConfig.user;
        connectionString.password = connectionConfig.password;
        connectionString.pathname = connectionConfig.db;

        return connectionString.toString();
    }

}
