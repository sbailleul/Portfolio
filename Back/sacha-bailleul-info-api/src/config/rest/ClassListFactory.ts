import {ClassListStrategy} from "../reflection/ClassListStrategy";
import {DbConnectorType} from "../database/DbConnectorType";
import {MongooseClassList} from "../reflection/MongooseClassList";
import {SequelizeClassList} from "../reflection/SequelizeClassList";

export class ClassListFactory{

    private static instance: ClassListFactory;
    private _classList: ClassListStrategy | undefined;

    private constructor(dbConnectorType: DbConnectorType){
        switch(dbConnectorType){
            case DbConnectorType.MONGOOSE:
                this._classList = new MongooseClassList();
                break;
            case DbConnectorType.SEQUELIZE:
                this._classList = new SequelizeClassList();
                break;
            default:
                this._classList = undefined;
        }
    }

    public static getInstance(dbConnectorType?: DbConnectorType): ClassListFactory {
        if(!this.instance && dbConnectorType ){
            this.instance = new ClassListFactory(dbConnectorType);
        }
        return this.instance;
    }

    get classList(): ClassListStrategy | undefined {
        return this._classList;
    }
}
