"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServerFactory_1 = require("./config/server/ServerFactory");
const ServerType_1 = require("./config/server/ServerType");
const ClassList_1 = require("./config/reflection/ClassList");
const ArticleType_1 = require("./models/ArticleType");
const ServiceStrategyFactory_1 = require("./config/rest/ServiceStrategyFactory");
const serverConnector = ServerFactory_1.ServerFactory.getServerConnector(ServerType_1.ServerType.EXPRESS);
const test = ClassList_1.ClassList.getInstance().getClass('Article');
console.log(test);
// type AConstructorTypeOf<T> = new (...args:any[]) => T;
// const typeOf= Article;
const obj = new test({ id: 2, content: "tess", type: ArticleType_1.ArticleType.GRADE, layer_order: 3 });
console.log(obj);
// const articleController = ControllerFactory.getController(RestType.ARTICLE);
serverConnector.listen();
ServiceStrategyFactory_1.ServiceStrategyFactory.
;
//# sourceMappingURL=index.js.map