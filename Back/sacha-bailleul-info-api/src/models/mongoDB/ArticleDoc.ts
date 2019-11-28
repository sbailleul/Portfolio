import {ArticleType} from "../ArticleType";
import {Document} from "mongoose";

export interface ArticleDoc extends Document {
    id: number;
    content: string;
    type: ArticleType;
    layer_order: number;
}
