interface IAccountRequestCredentialCategoryId {
    category: string;
    country: {
        predefinedType: string;
        values: [string];
    };
    type: {
        predefinedType: string;
        values: [string];
    };
}
interface IAccountRequest {
    mode: string;
    region: string;
    userAgent: string;
    callbackUrl?: string;
    successUrl?: string;
    errorUrl?: string;
    customerInternalReference: string;
    workflowDefinition: {
        key: number;
        credentials: [IAccountRequestCredentialCategoryId];
    };
}
export { IAccountRequest, IAccountRequestCredentialCategoryId, };
//# sourceMappingURL=IAccountRequest.d.ts.map