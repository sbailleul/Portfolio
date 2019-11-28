import {DbConnector} from "./DbConnector";

export interface ConnectionStrategy {

    connect(dbConnector: DbConnector):boolean;
}
