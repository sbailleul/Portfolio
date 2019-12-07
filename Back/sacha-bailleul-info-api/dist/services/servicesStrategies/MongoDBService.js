"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __importStar(require("mongoose"));
const ObjectUtil_1 = require("../../utils/ObjectUtil");
class MongoDBService {
    constructor(data) {
        if (!ObjectUtil_1.ObjectUtil.isComplete(data)) {
            throw new Error('No schema strategy to instantiate MongoDBService class');
        }
        this.model = data.schemaStrategy.getModel();
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.model) {
                return;
            }
            try {
                let item = yield this.model.findByIdAndDelete(id);
                if (!item)
                    return {
                        error: true,
                        statusCode: 404,
                        message: "item not found"
                    };
                return {
                    error: false,
                    deleted: true,
                    statusCode: 202,
                    item
                };
            }
            catch (error) {
                return {
                    error: true,
                    statusCode: 500,
                    errors: error.errors
                };
            }
        });
    }
    getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.model) {
                return;
            }
            try {
                let item = yield this.model.findById(id);
                return {
                    error: false,
                    statusCode: 200,
                    item
                };
            }
            catch (error) {
                return {
                    error: true,
                    statusCode: 500,
                    errors: error.errors
                };
            }
        });
    }
    getAll(query) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.model) {
                return;
            }
            let { skip, limit } = query;
            skip = skip ? Number(skip) : 0;
            limit = limit ? Number(limit) : 10;
            delete query.skip;
            delete query.limit;
            if (query._id) {
                try {
                    query._id = new mongoose.mongo.ObjectId(query._id);
                }
                catch (error) {
                    console.log("not able to generate mongoose id with content", query._id);
                }
            }
            try {
                let items = yield this.model
                    .find(query)
                    .skip(skip)
                    .limit(limit);
                return {
                    error: false,
                    statusCode: 200,
                    data: items
                };
            }
            catch (error) {
                return {
                    error: true,
                    statusCode: 500,
                    errors: error.errors
                };
            }
        });
    }
    insert(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.model) {
                return;
            }
            try {
                let item = yield this.model.create(data);
                if (item)
                    return {
                        error: false,
                        item
                    };
            }
            catch (error) {
                console.log("error", error);
                return {
                    error: true,
                    statusCode: 500,
                    message: error.errmsg || "Not able to create item",
                    errors: error.errors
                };
            }
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.model) {
                return;
            }
            try {
                let item = yield this.model.findByIdAndUpdate(id, data, { new: true });
                return {
                    error: false,
                    statusCode: 202,
                    item
                };
            }
            catch (error) {
                return {
                    error: true,
                    statusCode: 500,
                    errors: error.errors
                };
            }
        });
    }
}
exports.MongoDBService = MongoDBService;
//# sourceMappingURL=MongoDBService.js.map