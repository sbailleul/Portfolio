"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SimpleModel_1 = require("./SimpleModel");
class Article extends SimpleModel_1.SimpleModel {
    constructor(data) {
        super();
        this._id = data.id;
        this._content = data.content;
        this._type = data.type;
        this._layer_order = data.layer_order;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get content() {
        return this._content;
    }
    set content(value) {
        this._content = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
}
exports.Article = Article;
//# sourceMappingURL=Article.js.map