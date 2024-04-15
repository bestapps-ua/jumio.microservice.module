"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApiEntity_1 = __importDefault(require("./ApiEntity"));
const ApiOauth_1 = __importDefault(require("./ApiOauth"));
class ApiWorkflowData extends ApiEntity_1.default {
    constructor(props) {
        super(props);
        this._token = new ApiOauth_1.default(props.token);
        this._capabilities = props.capabilities;
        this._workflow = props.workflow;
    }
    get token() {
        return this._token;
    }
    set token(value) {
        this._token = value;
    }
    get capabilities() {
        return this._capabilities;
    }
    set capabilities(value) {
        this._capabilities = value;
    }
    get workflow() {
        return this._workflow;
    }
    set workflow(value) {
        this._workflow = value;
    }
}
exports.default = ApiWorkflowData;
//# sourceMappingURL=ApiWorkflowData.js.map