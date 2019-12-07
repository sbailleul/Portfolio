import {Controller} from "./Controller";
import {Service} from "../services/Service";

export class ArticleController extends Controller{


    constructor(data: {service: Service}) {
        super(data);
    }
}
