"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApiEntity_1 = __importDefault(require("./ApiEntity"));
class ApiOauth extends ApiEntity_1.default {
    constructor(props) {
        super(props);
        this._accessToken = props.accessToken;
        this._tokenType = props.tokenType;
        this._region = props.region;
        this._mode = props.mode;
        this._expires = props.expires;
    }
    get expires() {
        return this._expires;
    }
    set expires(value) {
        this._expires = value;
    }
    get tokenType() {
        return this._tokenType;
    }
    set tokenType(value) {
        this._tokenType = value;
    }
    get accessToken() {
        return this._accessToken;
    }
    set accessToken(value) {
        this._accessToken = value;
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
}
exports.default = ApiOauth;
//# sourceMappingURL=ApiOauth.js.map