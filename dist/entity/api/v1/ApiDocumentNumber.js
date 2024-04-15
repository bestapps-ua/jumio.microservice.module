"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApiEntity_1 = __importDefault(require("./ApiEntity"));
const ApiCategory_1 = __importDefault(require("./ApiCategory"));
class ApiDocumentNumber extends ApiEntity_1.default {
    constructor(props) {
        super(props);
        this._number = props.number;
        this._category = props.category ? new ApiCategory_1.default(props.category) : undefined;
    }
    get category() {
        return this._category;
    }
    set category(value) {
        this._category = value;
    }
    get number() {
        return this._number;
    }
    set number(value) {
        this._number = value;
    }
}
exports.default = ApiDocumentNumber;
//# sourceMappingURL=ApiDocumentNumber.js.map