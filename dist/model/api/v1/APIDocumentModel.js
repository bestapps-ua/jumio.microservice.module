"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApiDocument_1 = __importDefault(require("../../../entity/api/v1/ApiDocument"));
const APIEntityModel_1 = __importDefault(require("./APIEntityModel"));
class APIDocumentModel extends APIEntityModel_1.default {
}
exports.default = new APIDocumentModel({
    path: 'v1.document',
    entity: ApiDocument_1.default,
});
//# sourceMappingURL=APIDocumentModel.js.map