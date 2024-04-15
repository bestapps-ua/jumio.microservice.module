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
const AccountModel_1 = __importDefault(require("./AccountModel"));
const ApiWorkflowStatus_1 = __importDefault(require("../../entity/api/v1/ApiWorkflowStatus"));
const STATUS_INITIATED = 'INITIATED';
const STATUS_ACQUIRED = 'ACQUIRED';
const STATUS_PROCESSED = 'PROCESSED';
const STATUS_SESSION_EXPIRED = 'SESSION_EXPIRED';
const STATUS_TOKEN_EXPIRED = 'TOKEN_EXPIRED';
class AccountWorkflowModel extends AccountModel_1.default {
    workflowStatus(token, accountId, workflowExecutionId) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = {
                token: token.data,
                id: accountId,
                workflowExecutionId,
            };
            return yield this.model.action('getWorkflowStatus', params);
        });
    }
    workflowData(token, accountId, workflowExecutionId) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = {
                token: token.data,
                id: accountId,
                workflowExecutionId,
            };
            return yield this.model.action('getWorkflow', params);
        });
    }
    isProcessed(data) {
        let status = data instanceof ApiWorkflowStatus_1.default ? data.status : data.workflow.status;
        return status === STATUS_PROCESSED;
    }
    isFinished(data) {
        let status = data instanceof ApiWorkflowStatus_1.default ? data.status : data.workflow.status;
        return [STATUS_PROCESSED, STATUS_SESSION_EXPIRED, STATUS_TOKEN_EXPIRED].includes(status);
    }
}
exports.default = AccountWorkflowModel;
//# sourceMappingURL=AccountWorkflowModel.js.map