import ApiEntity from "./ApiEntity";

class ApiOauth extends ApiEntity {


    private _accessToken: string;
    private _tokenType: string;
    private _expires: number;
    private _region: string;
    private _mode: string;

    constructor(props) {
        super(props);
        this._accessToken = props.accessToken;
        this._tokenType = props.tokenType;
        this._region = props.region;
        this._mode = props.mode;
        this._expires = props.expires;
    }

    get expires(): number {
        return this._expires;
    }

    set expires(value: number) {
        this._expires = value;
    }
    get tokenType(): string {
        return this._tokenType;
    }

    set tokenType(value: string) {
        this._tokenType = value;
    }
    get accessToken(): string {
        return this._accessToken;
    }

    set accessToken(value: string) {
        this._accessToken = value;
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
}

export default ApiOauth;
