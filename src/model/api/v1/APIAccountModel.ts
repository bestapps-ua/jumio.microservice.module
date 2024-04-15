import ApiAccount from "../../../entity/api/v1/ApiAccount";
import APIEntityModel from "./APIEntityModel";

class APIAccountModel extends APIEntityModel {

}

export default new APIAccountModel({
    path: 'v1.jumio.account',
    entity: ApiAccount,
});
