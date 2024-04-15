import ApiEntity from "./ApiEntity";
import ApiDocument from "./ApiDocument";
import ApiCategory from "./ApiCategory";
declare class ApiDocumentCategory extends ApiEntity {
    private _document;
    private _category;
    private _type;
    constructor(props: any);
    get document(): ApiDocument;
    set document(value: ApiDocument);
    get type(): string;
    set type(value: string);
    get category(): ApiCategory;
    set category(value: ApiCategory);
}
export default ApiDocumentCategory;
//# sourceMappingURL=ApiDocumentCategory.d.ts.map