import _IEntityModelOptions from "./interface/IEntityModelOptions";
import {
    IAccountResponse as _IAccountResponse,
    IAccountResponseWeb as _IAccountResponseWeb,
    IAccountResponseAccount as _IAccountResponseAccount,
    IAccountResponseWorkflowExecution as _IAccountResponseWorkflowExecution,
    IAccountResponseSDK as _IAccountResponseSDK,
} from "./interface/IAccountResponse";

import _IAccountWorkflowDefinition from "./interface/IAccountWorkflowDefinition";
import _IAPIEntityModelOptions from "./interface/IAPIEntityModelOptions";
import _IEntityGet from "./interface/IEntityGet";

import {
    IAccountRequest as _IAccountRequest,
    IAccountRequestCredentialCategoryId as _IAccountRequestCredentialCategoryId,
} from "./interface/IAccountRequest";

namespace BestAppsJumioModule {
    export namespace interfaces {
        export interface IEntityModelOptions extends _IEntityModelOptions {}
        export interface IAccountResponse extends _IAccountResponse {}
        export interface IAccountResponseWeb extends _IAccountResponseWeb {}
        export interface IAccountResponseAccount extends _IAccountResponseAccount {}
        export interface IAccountResponseWorkflowExecution extends _IAccountResponseWorkflowExecution {}
        export interface IAccountResponseSDK extends _IAccountResponseSDK {}
        export interface IAccountWorkflowDefinition extends _IAccountWorkflowDefinition {}
        export interface IAPIEntityModelOptions extends _IAPIEntityModelOptions {}
        export interface IEntityGet extends _IEntityGet {}
        export interface IAccountRequest extends _IAccountRequest {}
        export interface IAccountRequestCredentialCategoryId extends _IAccountRequestCredentialCategoryId {}
    }
}

export = BestAppsJumioModule;
