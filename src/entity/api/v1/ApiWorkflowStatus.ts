import ApiEntity from "./ApiEntity";
import ApiOauth from "./ApiOauth";

class ApiWorkflowStatus extends ApiEntity {

    private _token: ApiOauth;
    private _status: string;

    constructor(props) {
        super(props);
        this._token = new ApiOauth(props.token);
        this._status = props.status;
    }

    get token(): ApiOauth {
        return this._token;
    }

    set token(value: ApiOauth) {
        this._token = value;
    }

    get status(): string {
        return this._status;
    }

    set status(value: string) {
        this._status = value;
    }
}

export default ApiWorkflowStatus;
