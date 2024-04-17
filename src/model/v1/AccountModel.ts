import EntityModel from "./EntityModel";
import IEntityModelOptions from "../../interface/IEntityModelOptions";
import ApiAccount from "../../entity/api/v1/ApiAccount";
import APIAccountModel from "../api/v1/APIAccountModel";
import {IAccountRequest} from "../../interface/IAccountRequest";


class AccountModel extends EntityModel {
    constructor(props: IEntityModelOptions = {model: APIAccountModel, entity: ApiAccount}) {
        super(props);
    }

    async create(params: IAccountRequest): Promise<ApiAccount> {
        return await this.action('create', params);
    }

    async update(id: string, params: IAccountRequest): Promise<ApiAccount> {
        return await this.action('create', params);
    }


}

export default AccountModel;
