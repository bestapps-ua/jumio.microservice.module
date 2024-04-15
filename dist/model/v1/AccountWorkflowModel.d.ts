import AccountModel from "./AccountModel";
import ApiOauth from "../../entity/api/v1/ApiOauth";
import ApiWorkflowStatus from "../../entity/api/v1/ApiWorkflowStatus";
import ApiWorkflowData from "../../entity/api/v1/ApiWorkflowData";
declare class AccountWorkflowModel extends AccountModel {
    workflowStatus(token: ApiOauth, accountId: string, workflowExecutionId: string): Promise<ApiWorkflowStatus>;
    workflowData(token: ApiOauth, accountId: string, workflowExecutionId: string): Promise<ApiWorkflowData>;
    isProcessed(data: ApiWorkflowStatus | ApiWorkflowData): boolean;
    isFinished(data: ApiWorkflowStatus | ApiWorkflowData): boolean;
}
export default AccountWorkflowModel;
//# sourceMappingURL=AccountWorkflowModel.d.ts.map