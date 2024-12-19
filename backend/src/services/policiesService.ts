import { Policy } from "../models/entities/policy.entity";
import { PolicyResponseDto } from "../models/dtos/PolicyResponseDto";
import { PolicyRepository } from "../repositories/policyRepository";
import { myDataSource } from "../app-data-source";
import { PolicyMapper } from "../mappers/policy.mapper";
import { inject } from "inversify";
import { injectable } from "inversify";

@injectable()
export class PolicyService {

    constructor(
        @inject(PolicyRepository)
        private readonly policyRepository: PolicyRepository,
    ) { }

    async savePolicy(createPolicyDto: any): Promise<Policy> {
        try {
            return await this.policyRepository.save(createPolicyDto);
        } catch (error) {
            console.log(error);
            throw new Error("");
        }
    }
}