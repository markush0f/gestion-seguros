import { Policy } from "../models/entities/policy.entity";
import { PolicyResponseDto } from "../models/dtos/PolicyResponseDto";
import { PolicyRepository } from "@/repositories/policyRepository";
import { myDataSource } from "../app-data-source";

export class PolicyService {

    private policyRepository: PolicyRepository;

    constructor() {
        this.policyRepository = myDataSource.getRepository(Policy);
    }
    async savePolicy(createPolicyDto: any): Promise<PolicyResponseDto> {
        const policySaved: Policy = await this.policyRepository.save(createPolicyDto);
        return new PolicyResponseDto(policySaved.id, policySaved.customerID, policySaved.policyType, policySaved.startDate, policySaved.endDate, policySaved.coverageAmount, policySaved.premium);
    }
}