import ApiEntity from "./ApiEntity";
import ApiOauth from "./ApiOauth";
declare class ApiWorkflowStatus extends ApiEntity {
    private _token;
    private _status;
    constructor(props: any);
    get token(): ApiOauth;
    set token(value: ApiOauth);
    get status(): string;
    set status(value: string);
}
export default ApiWorkflowStatus;
//# sourceMappingURL=ApiWorkflowStatus.d.ts.map