export class UpdatePolicyDto {

    startDate: Date
    endDate: Date
    coverageAmount: number
    premium: number;

    constructor(startDate: Date, endDate: Date, coverageAmount: number, premium: number) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.coverageAmount = coverageAmount;
        this.premium = premium;
    }
}

