import ApiEntity from "./ApiEntity";
import ApiOauth from "./ApiOauth";
declare class ApiWorkflowData extends ApiEntity {
    private _token;
    private _capabilities;
    private _workflow;
    constructor(props: any);
    get token(): ApiOauth;
    set token(value: ApiOauth);
    get capabilities(): any;
    set capabilities(value: any);
    get workflow(): any;
    set workflow(value: any);
}
export default ApiWorkflowData;
//# sourceMappingURL=ApiWorkflowData.d.ts.map