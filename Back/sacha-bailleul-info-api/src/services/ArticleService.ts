import {Service} from "./Service";
import {ServiceStrategy} from "./servicesStrategies/ServiceStrategy";

export class ArticleService extends Service{

    constructor(data: {serviceStrategy: ServiceStrategy}) {
        super(data);
    }
}
