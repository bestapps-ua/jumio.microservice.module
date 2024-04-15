import ApiEntity from "./ApiEntity";
import ApiDocumentNumber from "./ApiDocumentNumber";
import ApiDocumentUser from "./ApiDocumentUser";
import ApiDocumentCategory from "./ApiDocumentCategory";
import ApiUser from "./ApiUser";
declare class ApiDocument extends ApiEntity {
    private _name;
    private _status;
    private _type;
    private _numbers;
    private _users;
    private _categories;
    private _user;
    constructor(props: any);
    get type(): string;
    set type(value: string);
    get status(): string;
    set status(value: string);
    get name(): string;
    set name(value: string);
    get numbers(): ApiDocumentNumber[];
    set numbers(value: ApiDocumentNumber[] | any);
    get categories(): ApiDocumentCategory[];
    set categories(value: ApiDocumentCategory[] | any);
    get users(): ApiDocumentUser[];
    set users(value: ApiDocumentUser[] | any);
    get user(): ApiUser;
    set user(value: ApiUser);
}
export default ApiDocument;
//# sourceMappingURL=ApiDocument.d.ts.map