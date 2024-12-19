import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


enum PolicyType {
    Health = 'Health',
    Life = 'Life',
    Car = 'Car',
    Home = 'Home'
}

@Entity()
export class Policy {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    customerID: number;

    @Column()
    policyType: PolicyType

    @Column()
    startDate: Date

    @Column()
    endDate: Date

    @Column()
    coverageAmount: number

    @Column()
    premium: number;

    constructor(id: number, customerID: number, policyType: PolicyType, startDate: Date, endDate: Date, coverageAmount: number, premium: number) {
        this.id = id;
        this.customerID = customerID;
        this.policyType = policyType;
        this.startDate = startDate;
        this.endDate = endDate;
        this.coverageAmount = coverageAmount;
        this.premium = premium;
    }

}

const policy: Policy = new Policy(1, 1, PolicyType.Health, new Date(), new Date(), 10000, 5000);
