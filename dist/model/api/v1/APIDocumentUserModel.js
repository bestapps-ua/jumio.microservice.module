"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const APIEntityModel_1 = __importDefault(require("./APIEntityModel"));
const ApiDocumentUser_1 = __importDefault(require("../../../entity/api/v1/ApiDocumentUser"));
class APIDocumentUserModel extends APIEntityModel_1.default {
}
exports.default = new APIDocumentUserModel({
    path: 'v1.documentDocumentUser',
    entity: ApiDocumentUser_1.default,
});
//# sourceMappingURL=APIDocumentUserModel.js.map