import ApiEntity from "./ApiEntity";
import ApiDocument from "./ApiDocument";
import ApiUser from "./ApiUser";
declare class ApiDocumentUser extends ApiEntity {
    private _document;
    private _user;
    private _status;
    constructor(props: any);
    get status(): string;
    set status(value: string);
    get user(): ApiUser;
    set user(value: ApiUser);
    get document(): ApiDocument;
    set document(value: ApiDocument);
}
export default ApiDocumentUser;
//# sourceMappingURL=ApiDocumentUser.d.ts.map