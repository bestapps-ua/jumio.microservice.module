"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApiEntity_1 = __importDefault(require("./ApiEntity"));
const ApiOauth_1 = __importDefault(require("./ApiOauth"));
class ApiWorkflowStatus extends ApiEntity_1.default {
    constructor(props) {
        super(props);
        this._token = new ApiOauth_1.default(props.token);
        this._status = props.status;
    }
    get token() {
        return this._token;
    }
    set token(value) {
        this._token = value;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
}
exports.default = ApiWorkflowStatus;
//# sourceMappingURL=ApiWorkflowStatus.js.map