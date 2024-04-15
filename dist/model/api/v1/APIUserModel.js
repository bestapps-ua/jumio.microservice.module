"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApiUser_1 = __importDefault(require("../../../entity/api/v1/ApiUser"));
const APIEntityModel_1 = __importDefault(require("./APIEntityModel"));
class APIUserModel extends APIEntityModel_1.default {
}
exports.default = new APIUserModel({
    path: 'v1.documentUser',
    entity: ApiUser_1.default,
});
//# sourceMappingURL=APIUserModel.js.map