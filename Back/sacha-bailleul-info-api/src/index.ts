import {ServerFactory} from "./config/server/ServerFactory";
import {ServerType} from "./config/server/ServerType";
import {ClassList} from "./config/reflection/ClassList";
import {ArticleType} from "./models/ArticleType";
import {Article} from "./models/Article";
import {ConstructorType} from "./config/reflection/ClassListStrategy";
import {ServiceStrategyFactory} from "./config/rest/ServiceStrategyFactory";


const serverConnector = ServerFactory.getServerConnector(ServerType.EXPRESS);
const test : ConstructorType<Object> = ClassList.getInstance().getClass('Article');
console.log(test);

// type AConstructorTypeOf<T> = new (...args:any[]) => T;
// const typeOf= Article;
const obj = new test({id: 2, content: "tess", type: ArticleType.GRADE, layer_order: 3});
console.log(obj);

// const articleController = ControllerFactory.getController(RestType.ARTICLE);
serverConnector.listen();
ServiceStrategyFactory.
