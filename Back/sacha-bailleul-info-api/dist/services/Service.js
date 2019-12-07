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
Object.defineProperty(exports, "__esModule", { value: true });
const ObjectUtil_1 = require("../utils/ObjectUtil");
class Service {
    constructor(data) {
        if (!ObjectUtil_1.ObjectUtil.isComplete(data)) {
            throw new Error('No service strategy to instantiate Service class');
        }
        this.serviceStrategy = data.serviceStrategy;
        this.getAll = this.getAll.bind(this);
        this.getOne = this.getOne.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }
    getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.serviceStrategy.getOne(id);
        });
    }
    getAll(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.serviceStrategy.getAll(query);
        });
    }
    insert(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.serviceStrategy.insert(data);
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.serviceStrategy.update(id, data);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.serviceStrategy.delete(id);
        });
    }
}
exports.Service = Service;
//# sourceMappingURL=Service.js.map