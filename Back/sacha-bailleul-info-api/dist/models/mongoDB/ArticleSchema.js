"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class ArticleSchema {
    createSchema() {
        return new mongoose_1.Schema({
            id: { type: String, required: true, unique: true },
        });
    }
    getModel() {
        return mongoose_1.model('Article', this.createSchema());
    }
}
exports.ArticleSchema = ArticleSchema;
//# sourceMappingURL=ArticleSchema.js.map