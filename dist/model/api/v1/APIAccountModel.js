"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApiAccount_1 = __importDefault(require("../../../entity/api/v1/ApiAccount"));
const APIEntityModel_1 = __importDefault(require("./APIEntityModel"));
class APIAccountModel extends APIEntityModel_1.default {
}
exports.default = new APIAccountModel({
    path: 'v1.jumio.account',
    entity: ApiAccount_1.default,
});
//# sourceMappingURL=APIAccountModel.js.map