import EntityModel from "./EntityModel";
import IEntityModelOptions from "../../interface/IEntityModelOptions";
import ApiAccount from "../../entity/api/v1/ApiAccount";
import APIAccountModel from "../api/v1/APIAccountModel";
import {IAccountRequest} from "../../interface/IAccountRequest";


/**
 * let data: any = {
 *             mode: 'sandbox',
 *             region: 'US',
 *             userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Safari/605.1.15',
 *             customerInternalReference: `testAccount::${uuid4()}`,
 *             workflowDefinition: {
 *                 key: 10011,
 *                 credentials: [
 *                     {
 *                         category: "ID",
 *                         country: {
 *                             predefinedType: "DEFINED",
 *                             values: ["USA", "CAN"]
 *                         },
 *                         type: {
 *                             predefinedType: "DEFINED",
 *                             values: ["DRIVING_LICENSE", "ID_CARD"]
 *                         }
 *                     }
 *                 ]
 *             },
 *             query: params.query ?? {},
 *         }
 */
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
