"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApiOauth_1 = __importDefault(require("../../../entity/api/v1/ApiOauth"));
const APIEntityModel_1 = __importDefault(require("./APIEntityModel"));
class APIOAuthModel extends APIEntityModel_1.default {
}
exports.default = new APIOAuthModel({
    path: 'v1.jumio.oauth',
    entity: ApiOauth_1.default,
});
//# sourceMappingURL=APIOAuthModel.js.map