import EntityModel from "./EntityModel";
import IEntityModelOptions from "../../interface/IEntityModelOptions";
import ApiOauth from "../../entity/api/v1/ApiOauth";
declare class OAuthModel extends EntityModel {
    constructor(props?: IEntityModelOptions);
    auth(params?: any): Promise<ApiOauth>;
}
export default OAuthModel;
//# sourceMappingURL=OAuthModel.d.ts.map