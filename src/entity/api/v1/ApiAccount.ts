import ApiEntity from "./ApiEntity";
import ApiOauth from "./ApiOauth";
import {IAccountResponseAccount, IAccountResponseWeb} from "../../../interface/IAccountResponse";

class ApiAccount extends ApiEntity {
    private _region: string;
    private _mode: string;
    private _web: IAccountResponseWeb;
    private _account: IAccountResponseAccount;
    private _token: ApiOauth;

    constructor(props) {
        super(props);
        this._region = props.region;
        this._mode = props.mode;
        this._web = props.web;
        this._account = props.account;
        this._token = new ApiOauth(props.token);
    }

    get mode(): string {
        return this._mode;
    }

    set mode(value: string) {
        this._mode = value;
    }
    get region(): string {
        return this._region;
    }

    set region(value: string) {
        this._region = value;
    }

    get token(): ApiOauth {
        return this._token;
    }

    set token(value: ApiOauth) {
        this._token = value;
    }
    get account(): IAccountResponseAccount {
        return this._account;
    }

    set account(value: IAccountResponseAccount) {
        this._account = value;
    }
    get web(): IAccountResponseWeb {
        return this._web;
    }

    set web(value: IAccountResponseWeb) {
        this._web = value;
    }
}

export default ApiAccount;
