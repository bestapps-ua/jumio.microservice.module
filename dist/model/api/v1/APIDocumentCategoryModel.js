"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const APIEntityModel_1 = __importDefault(require("./APIEntityModel"));
const ApiDocumentCategory_1 = __importDefault(require("../../../entity/api/v1/ApiDocumentCategory"));
class APIDocumentCategoryModel extends APIEntityModel_1.default {
}
exports.default = new APIDocumentCategoryModel({
    path: 'v1.documentDocumentCategory',
    entity: ApiDocumentCategory_1.default,
});
//# sourceMappingURL=APIDocumentCategoryModel.js.map