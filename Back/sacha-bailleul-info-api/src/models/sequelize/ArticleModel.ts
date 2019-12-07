
import Sequelize, {DataTypes, Model} from "sequelize";
import {SequelizeModel} from "./SequelizeModel";
import {ArticleType} from "../ArticleType";

export class SequelizeArticleModel extends Model{}

export class ArticleModel  implements SequelizeModel{

     init(sequelize: any) {
         SequelizeArticleModel.init({
            id: {type: Sequelize.INTEGER, primaryKey: true},
            content: Sequelize.STRING,
            type: Sequelize.ENUM({values:Object.keys(ArticleType)}),
            layer_order: Sequelize.STRING
            }, {sequelize, tableName: 'article',timestamps: false}
        );
     }

}

