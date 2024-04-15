"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApiEntity_1 = __importDefault(require("./ApiEntity"));
const ApiDocumentNumber_1 = __importDefault(require("./ApiDocumentNumber"));
const ApiDocumentUser_1 = __importDefault(require("./ApiDocumentUser"));
const ApiDocumentCategory_1 = __importDefault(require("./ApiDocumentCategory"));
const ApiUser_1 = __importDefault(require("./ApiUser"));
class ApiDocument extends ApiEntity_1.default {
    constructor(props) {
        super(props);
        this._name = props.name;
        this._status = props.status;
        this._type = props.type;
        this._user = props.user ? new ApiUser_1.default(props.user) : undefined;
        this.numbers = props.numbers || [];
        this.users = props.users || [];
        this.categories = props.categories || [];
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get numbers() {
        return this._numbers;
    }
    set numbers(value) {
        this._numbers = [];
        for (const documentNumber of value) {
            this._numbers.push(new ApiDocumentNumber_1.default(documentNumber));
        }
    }
    get categories() {
        return this._categories;
    }
    set categories(value) {
        this._categories = [];
        for (const documentCategory of value) {
            this._categories.push(new ApiDocumentCategory_1.default(documentCategory));
        }
    }
    get users() {
        return this._users;
    }
    set users(value) {
        this._users = [];
        for (const documentUser of value) {
            this._users.push(new ApiDocumentUser_1.default(documentUser));
        }
    }
    get user() {
        return this._user;
    }
    set user(value) {
        this._user = value;
    }
}
exports.default = ApiDocument;
//# sourceMappingURL=ApiDocument.js.map