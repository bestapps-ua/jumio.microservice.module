"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApiEntity_1 = __importDefault(require("./ApiEntity"));
class ApiCategory extends ApiEntity_1.default {
    constructor(props) {
        super(props);
        this._name = props.name;
        this._status = props.status;
        this._type = props.type;
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
}
exports.default = ApiCategory;
//# sourceMappingURL=ApiCategory.js.map