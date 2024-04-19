import AccountModel from "./AccountModel";
import ApiOauth from "../../entity/api/v1/ApiOauth";
import ApiWorkflowStatus from "../../entity/api/v1/ApiWorkflowStatus";
import ApiWorkflowData from "../../entity/api/v1/ApiWorkflowData";

const STATUS_INITIATED = 'INITIATED';
const STATUS_ACQUIRED = 'ACQUIRED';
const STATUS_PROCESSED = 'PROCESSED';
const STATUS_SESSION_EXPIRED = 'SESSION_EXPIRED';
const STATUS_TOKEN_EXPIRED = 'TOKEN_EXPIRED';

class AccountWorkflowModel extends AccountModel {

    async workflowStatus(token: ApiOauth, accountId: string, workflowExecutionId: string): Promise<ApiWorkflowStatus> {
        let params = {
            token: token.props,
            id: accountId,
            workflowExecutionId,
        };
        return await this.model.action('getWorkflowStatus', params);
    }

    async workflowData(token: ApiOauth, accountId: string, workflowExecutionId: string): Promise<ApiWorkflowData> {
        let params = {
            token: token.props,
            id: accountId,
            workflowExecutionId,
        };
        return await this.model.action('getWorkflow', params);
    }

    isProcessed(data: ApiWorkflowStatus | ApiWorkflowData) {
        let status = data instanceof ApiWorkflowStatus ? data.status : data.workflow.status;
        return status === STATUS_PROCESSED;
    }

    isFinished(data: ApiWorkflowStatus | ApiWorkflowData) {
        let status = data instanceof ApiWorkflowStatus ? data.status : data.workflow.status;
        return [STATUS_PROCESSED, STATUS_SESSION_EXPIRED, STATUS_TOKEN_EXPIRED].includes(status);
    }
}

export default AccountWorkflowModel;
