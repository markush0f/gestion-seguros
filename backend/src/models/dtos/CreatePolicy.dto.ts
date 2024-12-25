export class CreatePolicyDto {

    customerID: number;
    policyType: string;
    startDate: Date;
    endDate: Date;
    coverageAmount: number;
    premium: number;
    
    constructor(customerID: number, policyType: string, startDate: Date, endDate: Date, coverageAmount: number, premium: number) {
        this.customerID = customerID;
        this.policyType = policyType;
        this.startDate = startDate;
        this.endDate = endDate;
        this.coverageAmount = coverageAmount;
        this.premium = premium;
    }
}