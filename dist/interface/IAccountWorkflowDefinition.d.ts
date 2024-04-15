export default interface IAccountWorkflowDefinition {
    key: number;
    credentials?: {
        category: string;
        country: {
            predefinedType: string;
            values: string[];
        };
        "type": {
            "predefinedType": string;
            "values": string[];
        };
    };
}
//# sourceMappingURL=IAccountWorkflowDefinition.d.ts.map