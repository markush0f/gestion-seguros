export class PolicyResponseDto {
    id: number;
    customerID: number;
    policyType: string;
    startDate: Date;
    endDate: Date;
    coverageAmount: number;
    premium: number;
    
    constructor(id: number, customerID: number, policyType: string, startDate: Date, endDate: Date, coverageAmount: number, premium: number) {
        this.id = id;
        this.customerID = customerID;
        this.policyType = policyType;
        this.startDate = startDate;
        this.endDate = endDate;
        this.coverageAmount = coverageAmount;
        this.premium = premium;
    }
}