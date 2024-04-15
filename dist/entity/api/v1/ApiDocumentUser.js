"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApiEntity_1 = __importDefault(require("./ApiEntity"));
const ApiDocument_1 = __importDefault(require("./ApiDocument"));
const ApiUser_1 = __importDefault(require("./ApiUser"));
class ApiDocumentUser extends ApiEntity_1.default {
    constructor(props) {
        super(props);
        this._document = props.document ? new ApiDocument_1.default(props.document) : undefined;
        this._user = props.user ? new ApiUser_1.default(props.user) : undefined;
        this._status = props.status;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
    get user() {
        return this._user;
    }
    set user(value) {
        this._user = value;
    }
    get document() {
        return this._document;
    }
    set document(value) {
        this._document = value;
    }
}
exports.default = ApiDocumentUser;
//# sourceMappingURL=ApiDocumentUser.js.map