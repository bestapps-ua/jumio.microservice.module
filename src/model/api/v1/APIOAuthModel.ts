import ApiOauth from "../../../entity/api/v1/ApiOauth";
import APIEntityModel from "./APIEntityModel";

class APIOAuthModel extends APIEntityModel {

}

export default new APIOAuthModel({
    path: 'v1.jumio.oauth',
    entity: ApiOauth,
});
