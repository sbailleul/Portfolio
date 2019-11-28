import {ServerStrategy} from "./ServerStrategy";
import express, {Express} from "express";
import {ServerConnector} from "./ServerConnector";
import bodyParser from "body-parser";
import {DbConnector} from "../database/DbConnector";
import {DbConnectorFactory} from "../database/DbConnectorFactory";
import {DbConnectorType} from "../database/DbConnectorType";

export class ExpressServerStrategy implements ServerStrategy{

    private server: Express;

    constructor(){
        this.server = express();
        this.server.use(bodyParser.json());
    }

    listen(serverConnector: ServerConnector): void {
        try{
            this.server.listen(serverConnector.port, () => {
                console.log(`app running on port ${serverConnector.port}`);
                // // console.log(ResourcesConfig.DB_CONFIG);
                // const dbConnector: DbConnector = DbConnectorFactory.getDbConnector(DbConnectorType.MONGODB);
                // const dbConnector2: DbConnector = DbConnectorFactory.getDbConnector();
                // dbConnector2.connect();
            })
        } catch (err) {
            throw err;
        }
    }

    setRoutes(router: Router){

    }



}
