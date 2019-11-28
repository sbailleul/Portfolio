import Service from "./Service";
import {ServiceStrategy} from "./servicesStrategies/ServiceStrategy";

export class ArticleService extends Service{

    constructor(serviceStrategy: ServiceStrategy) {
        super(serviceStrategy);
    }
}
