"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApiEntity_1 = __importDefault(require("./ApiEntity"));
const ApiDocument_1 = __importDefault(require("./ApiDocument"));
const ApiCategory_1 = __importDefault(require("./ApiCategory"));
class ApiDocumentCategory extends ApiEntity_1.default {
    constructor(props) {
        super(props);
        this._category = props.category ? new ApiCategory_1.default(props.category) : undefined;
        this._document = props.document ? new ApiDocument_1.default(props.document) : undefined;
        this._type = props.type;
    }
    get document() {
        return this._document;
    }
    set document(value) {
        this._document = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get category() {
        return this._category;
    }
    set category(value) {
        this._category = value;
    }
}
exports.default = ApiDocumentCategory;
//# sourceMappingURL=ApiDocumentCategory.js.map