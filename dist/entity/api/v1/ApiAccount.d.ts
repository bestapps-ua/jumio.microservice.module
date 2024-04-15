import ApiEntity from "./ApiEntity";
import ApiOauth from "./ApiOauth";
import { IAccountResponseAccount, IAccountResponseWeb } from "../../../interface/IAccountResponse";
declare class ApiAccount extends ApiEntity {
    private _region;
    private _mode;
    private _web;
    private _account;
    private _token;
    constructor(props: any);
    get mode(): string;
    set mode(value: string);
    get region(): string;
    set region(value: string);
    get token(): ApiOauth;
    set token(value: ApiOauth);
    get account(): IAccountResponseAccount;
    set account(value: IAccountResponseAccount);
    get web(): IAccountResponseWeb;
    set web(value: IAccountResponseWeb);
}
export default ApiAccount;
//# sourceMappingURL=ApiAccount.d.ts.map