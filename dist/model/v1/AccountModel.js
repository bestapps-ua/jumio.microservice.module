"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EntityModel_1 = __importDefault(require("./EntityModel"));
const ApiAccount_1 = __importDefault(require("../../entity/api/v1/ApiAccount"));
const APIAccountModel_1 = __importDefault(require("../api/v1/APIAccountModel"));
/**
 * let data: any = {
 *             mode: 'sandbox',
 *             region: 'US',
 *             userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Safari/605.1.15',
 *             customerInternalReference: `testAccount::${uuid4()}`,
 *             workflowDefinition: {
 *                 key: 10011,
 *                 credentials: [
 *                     {
 *                         category: "ID",
 *                         country: {
 *                             predefinedType: "DEFINED",
 *                             values: ["USA", "CAN"]
 *                         },
 *                         type: {
 *                             predefinedType: "DEFINED",
 *                             values: ["DRIVING_LICENSE", "ID_CARD"]
 *                         }
 *                     }
 *                 ]
 *             },
 *             query: params.query ?? {},
 *         }
 */
class AccountModel extends EntityModel_1.default {
    constructor(props = { model: APIAccountModel_1.default, entity: ApiAccount_1.default }) {
        super(props);
    }
    create(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.action('create', params);
        });
    }
    update(id, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.action('create', params);
        });
    }
}
exports.default = AccountModel;
//# sourceMappingURL=AccountModel.js.map