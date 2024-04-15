interface IAccountResponseAccount {
    id: string;
}
interface IAccountResponseWeb {
    href: string;
}
interface IAccountResponseSDK {
    token: string;
}
interface IAccountResponseWorkflowExecution {
    id: string;
}
interface IAccountResponse {
    account: IAccountResponseAccount;
    web: IAccountResponseWeb;
    sdk: IAccountResponseSDK;
    workflowExecution: IAccountResponseWorkflowExecution;
    timestamp: string;
}
export { IAccountResponse, IAccountResponseWeb, IAccountResponseAccount, IAccountResponseWorkflowExecution, IAccountResponseSDK, };
//# sourceMappingURL=IAccountResponse.d.ts.map