
import {ServerConnector} from "./ServerConnector";
import {ServerType} from "./ServerType";
import {ExpressServerStrategy} from "./ExpressServerStrategy";
import {ResourcesConfig} from "../../resources/ResourcesConfig";

export class ServerFactory {

    private static server: ServerConnector;

    public static getServerConnector(serverType?: ServerType): ServerConnector {

        if (!this.server){
            switch (serverType) {
                case ServerType.EXPRESS:
                    this.server = new ServerConnector(ResourcesConfig.EXPRESS_CONFIG, new ExpressServerStrategy());
                    break;
            }
        }
        return this.server;
    }
}
