import {ArticleType} from "./ArticleType";
import {SimpleModel} from "./SimpleModel";


export class Article extends SimpleModel{

    private _id: number;
    private _content: string;
    private _type: ArticleType;
    private _layer_order: number;


    constructor(data:{id: number, content: string, type: ArticleType, layer_order: number}){
        super();
        this._id = data.id;
        this._content = data.content;
        this._type = data.type;
        this._layer_order = data.layer_order;
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get content(): string {
        return this._content;
    }

    set content(value: string) {
        this._content = value;
    }

    get type(): ArticleType {
        return this._type;
    }

    set type(value: ArticleType) {
        this._type = value;
    }
}
