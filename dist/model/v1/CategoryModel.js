"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EntityModel_1 = __importDefault(require("./EntityModel"));
const APICategoryModel_1 = __importDefault(require("../api/v1/APICategoryModel"));
class CategoryModel extends EntityModel_1.default {
    constructor(props = {}) {
        var _a;
        props.model = (_a = props.model) !== null && _a !== void 0 ? _a : APICategoryModel_1.default;
        super(props);
    }
}
exports.default = CategoryModel;
//# sourceMappingURL=CategoryModel.js.map