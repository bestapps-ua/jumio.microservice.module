import ApiEntity from "./ApiEntity";
import ApiOauth from "./ApiOauth";

class ApiWorkflowData extends ApiEntity {

    private _token: ApiOauth;
    private _capabilities: any;
    private _workflow: any;

    constructor(props) {
        super(props);
        this._token = new ApiOauth(props.token);
        this._capabilities = props.capabilities;
        this._workflow = props.workflow;
    }

    get token(): ApiOauth {
        return this._token;
    }

    set token(value: ApiOauth) {
        this._token = value;
    }

    get capabilities(): any {
        return this._capabilities;
    }

    set capabilities(value: any) {
        this._capabilities = value;
    }

    get workflow(): any {
        return this._workflow;
    }

    set workflow(value: any) {
        this._workflow = value;
    }
}

export default ApiWorkflowData;
