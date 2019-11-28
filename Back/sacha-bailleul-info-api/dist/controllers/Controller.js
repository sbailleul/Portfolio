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
class Controller {
    constructor(service) {
        this.service = service;
        this.getAll = this.getAll.bind(this);
        // this.get = this.get.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.status(200).send(yield this.service.getAll(req.query));
        });
    }
    insert(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.service.insert(req.body);
            if (response.error) {
                return res.status(response.statusCode).send(response);
            }
            return res.status(201).send(response);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            let response = yield this.service.update(id, req.body);
            return res.status(response.statusCode).send(response);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            let response = yield this.service.delete(id);
            return res.status(response.statusCode).send(response);
        });
    }
}
exports.Controller = Controller;
exports.default = Controller;
//# sourceMappingURL=Controller.js.map