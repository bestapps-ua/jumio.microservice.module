import EntityModel from "./EntityModel";
import APIOAuthModel from "../api/v1/APIOAuthModel";
import IEntityModelOptions from "../../interface/IEntityModelOptions";
import ApiOauth from "../../entity/api/v1/ApiOauth";

class OAuthModel extends EntityModel {
    constructor(props: IEntityModelOptions = {model: APIOAuthModel, entity: ApiOauth}) {
        super(props);
    }

    async auth(params: any = {}): Promise<ApiOauth> {
        return await this.action('auth', params);
    }
}

export default OAuthModel;
