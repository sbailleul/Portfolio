import {ControllerFactory} from "../rest/ControllerFactory";
import {ServerStrategy} from "../server/ServerStrategy";
import {RestType} from "../rest/RestType";
import {Controller} from "../../controllers/Controller";
import {ObjectUtil} from "../../utils/ObjectUtil";
const httpMethods = require("http2").constants;


export class Router{


    public static setRoutes(server: ServerStrategy) {
        Object.keys(RestType).forEach(key => this.setRouteByRestType(server , ObjectUtil.getObjectValueByKey(RestType,key)));
    }

    private static setRouteByRestType(server: ServerStrategy, restType: string) : void{

        let controller: Controller | undefined;

        if(!restType || !server || !(controller = ControllerFactory.getInstance().getController(restType))){
            return;
        }

        restType = restType.toLowerCase();
        server.route({url: '/'+restType, httpMethod: httpMethods.HTTP2_METHOD_GET, callback: controller.getAll});
        server.route({url: '/'+restType, httpMethod: httpMethods.HTTP2_METHOD_POST, callback: controller.insert});
        server.route({url: '/'+restType + '/:id', httpMethod: httpMethods.HTTP2_METHOD_GET, callback: controller.getOne});
        server.route({url: '/'+restType + '/:id', httpMethod: httpMethods.HTTP2_METHOD_PUT, callback: controller.update});
        server.route({url: '/'+restType + '/:id', httpMethod: httpMethods.HTTP2_METHOD_DELETE, callback: controller.delete});
    }


}
