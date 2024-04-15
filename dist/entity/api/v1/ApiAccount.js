"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApiEntity_1 = __importDefault(require("./ApiEntity"));
const ApiOauth_1 = __importDefault(require("./ApiOauth"));
class ApiAccount extends ApiEntity_1.default {
    constructor(props) {
        super(props);
        this._region = props.region;
        this._mode = props.mode;
        this._web = props.web;
        this._account = props.account;
        this._token = new ApiOauth_1.default(props.token);
    }
    get mode() {
        return this._mode;
    }
    set mode(value) {
        this._mode = value;
    }
    get region() {
        return this._region;
    }
    set region(value) {
        this._region = value;
    }
    get token() {
        return this._token;
    }
    set token(value) {
        this._token = value;
    }
    get account() {
        return this._account;
    }
    set account(value) {
        this._account = value;
    }
    get web() {
        return this._web;
    }
    set web(value) {
        this._web = value;
    }
}
exports.default = ApiAccount;
//# sourceMappingURL=ApiAccount.js.map