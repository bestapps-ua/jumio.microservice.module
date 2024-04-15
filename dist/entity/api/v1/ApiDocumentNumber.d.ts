import ApiEntity from "./ApiEntity";
import ApiCategory from "./ApiCategory";
declare class ApiDocumentNumber extends ApiEntity {
    private _number;
    private _category;
    constructor(props: any);
    get category(): ApiCategory;
    set category(value: ApiCategory);
    get number(): string;
    set number(value: string);
}
export default ApiDocumentNumber;
//# sourceMappingURL=ApiDocumentNumber.d.ts.map