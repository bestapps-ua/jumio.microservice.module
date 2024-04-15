import ApiEntity from "./ApiEntity";
declare class ApiCategory extends ApiEntity {
    private _name;
    private _status;
    private _type;
    constructor(props: any);
    get type(): string;
    set type(value: string);
    get status(): string;
    set status(value: string);
    get name(): string;
    set name(value: string);
}
export default ApiCategory;
//# sourceMappingURL=ApiCategory.d.ts.map