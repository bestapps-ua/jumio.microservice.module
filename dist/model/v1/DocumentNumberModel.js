"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EntityModel_1 = __importDefault(require("./EntityModel"));
const APIDocumentNumberModel_1 = __importDefault(require("../api/v1/APIDocumentNumberModel"));
class DocumentNumberModel extends EntityModel_1.default {
    constructor(props = {}) {
        var _a;
        props.model = (_a = props.model) !== null && _a !== void 0 ? _a : APIDocumentNumberModel_1.default;
        super(props);
    }
}
exports.default = DocumentNumberModel;
//# sourceMappingURL=DocumentNumberModel.js.map