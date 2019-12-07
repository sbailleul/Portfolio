"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ControllerFactory_1 = require("../rest/ControllerFactory");
const RestType_1 = require("../rest/RestType");
const ObjectUtil_1 = require("../../utils/ObjectUtil");
const httpMethods = require("http2").constants;
class Router {
    static setRoutes(server) {
        Object.keys(RestType_1.RestType).forEach(key => this.setRouteByRestType(server, ObjectUtil_1.ObjectUtil.getObjectValueByKey(RestType_1.RestType, key)));
    }
    static setRouteByRestType(server, restType) {
        let controller;
        if (!restType || !server || !(controller = ControllerFactory_1.ControllerFactory.getInstance().getController(restType))) {
            return;
        }
        restType = restType.toLowerCase();
        server.route({ url: '/' + restType, httpMethod: httpMethods.HTTP2_METHOD_GET, callback: controller.getAll });
        server.route({ url: '/' + restType, httpMethod: httpMethods.HTTP2_METHOD_POST, callback: controller.insert });
        server.route({ url: '/' + restType + '/:id', httpMethod: httpMethods.HTTP2_METHOD_GET, callback: controller.getOne });
        server.route({ url: '/' + restType + '/:id', httpMethod: httpMethods.HTTP2_METHOD_PUT, callback: controller.update });
        server.route({ url: '/' + restType + '/:id', httpMethod: httpMethods.HTTP2_METHOD_DELETE, callback: controller.delete });
    }
}
exports.Router = Router;
//# sourceMappingURL=Router.js.map