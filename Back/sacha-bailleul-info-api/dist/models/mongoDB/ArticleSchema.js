"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class ArticleSchema {
    createSchema() {
        return new mongoose_1.Schema({
            id: { type: Number, unique: true },
            content: { type: String, required: true },
            type: { type: String, required: true },
            layer_order: { type: Number, required: true },
        }, { versionKey: false });
    }
    getModel() {
        return mongoose_1.model('articles', this.createSchema());
    }
}
exports.ArticleSchema = ArticleSchema;
//# sourceMappingURL=ArticleSchema.js.map