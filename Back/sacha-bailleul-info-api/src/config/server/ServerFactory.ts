
import {ServerConnector} from "./ServerConnector";
import {ServerType} from "./ServerType";
import {ExpressServerStrategy} from "./ExpressServerStrategy";
import {ResourcesConfig} from "../../resources/ResourcesConfig";


export class ServerFactory {

    private static instance: ServerFactory;
    private server: ServerConnector | undefined;
    private serverType: ServerType;

    constructor(serverType: ServerType) {
        this.serverType = serverType;
    }

    public static getInstance(serverType?: ServerType): ServerFactory{

        if(!this.instance && serverType){
            this.instance = new ServerFactory(serverType);
        }
        return this.instance;
    }

    public  getServerConnector(): ServerConnector {

        switch (this.serverType) {
            case ServerType.EXPRESS:
                this.server = new ServerConnector(ResourcesConfig.EXPRESS_CONFIG, new ExpressServerStrategy());
                break;
        }

        return this.server;
    }
}
