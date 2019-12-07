import {Service} from "../../services/Service";
import {ClassListStrategy} from "../reflection/ClassListStrategy";
import {Model} from "sequelize";
import {SequelizeClassList} from "../reflection/SequelizeClassList";
import {SequelizeModel} from "../../models/sequelize/SequelizeModel";

export class SequelizeModelFactory{

    private static instance: SequelizeModelFactory;
    private _modelArray: SequelizeModel[];
    private classListStrategy: SequelizeClassList;

    constructor(classListStrategy: ClassListStrategy) {
        this.classListStrategy = <SequelizeClassList>classListStrategy;
        this._modelArray = [];
        this.instantiateModels();
    }

    public static getInstance(classListStrategy?: ClassListStrategy): SequelizeModelFactory {
        if(!this.instance && classListStrategy){
            this.instance = new SequelizeModelFactory(classListStrategy)
        }
        return this.instance;
    }

    private instantiateModels(): void{
        this.classListStrategy.getModels().forEach(model => this._modelArray.push(<SequelizeModel>new model()));
    }


    get modelArray(): SequelizeModel[] {
        return this._modelArray;
    }
}
