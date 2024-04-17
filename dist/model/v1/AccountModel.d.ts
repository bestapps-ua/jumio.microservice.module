import EntityModel from "./EntityModel";
import IEntityModelOptions from "../../interface/IEntityModelOptions";
import ApiAccount from "../../entity/api/v1/ApiAccount";
import { IAccountRequest } from "../../interface/IAccountRequest";
declare class AccountModel extends EntityModel {
    constructor(props?: IEntityModelOptions);
    create(params: IAccountRequest): Promise<ApiAccount>;
    update(id: string, params: IAccountRequest): Promise<ApiAccount>;
}
export default AccountModel;
//# sourceMappingURL=AccountModel.d.ts.map