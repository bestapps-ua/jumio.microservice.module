"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const APIEntityModel_1 = __importDefault(require("./APIEntityModel"));
const ApiDocumentNumber_1 = __importDefault(require("../../../entity/api/v1/ApiDocumentNumber"));
class APIDocumentNumberModel extends APIEntityModel_1.default {
}
exports.default = new APIDocumentNumberModel({
    path: 'v1.documentNumber',
    entity: ApiDocumentNumber_1.default,
});
//# sourceMappingURL=APIDocumentNumberModel.js.map