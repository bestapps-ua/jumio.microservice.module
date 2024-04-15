"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApiCategory_1 = __importDefault(require("../../../entity/api/v1/ApiCategory"));
const APIEntityModel_1 = __importDefault(require("./APIEntityModel"));
class APICategoryModel extends APIEntityModel_1.default {
}
exports.default = new APICategoryModel({
    path: 'v1.documentCategory',
    entity: ApiCategory_1.default,
});
//# sourceMappingURL=APICategoryModel.js.map