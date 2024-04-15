import ApiEntity from "./ApiEntity";
declare class ApiOauth extends ApiEntity {
    private _accessToken;
    private _tokenType;
    private _expires;
    private _region;
    private _mode;
    constructor(props: any);
    get expires(): number;
    set expires(value: number);
    get tokenType(): string;
    set tokenType(value: string);
    get accessToken(): string;
    set accessToken(value: string);
    get mode(): string;
    set mode(value: string);
    get region(): string;
    set region(value: string);
}
export default ApiOauth;
//# sourceMappingURL=ApiOauth.d.ts.map