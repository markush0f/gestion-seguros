import { PolicyMapper } from "../mappers/policy.mapper";
import { PolicyResponseDto } from "../models/dtos/PolicyResponseDto";
import { Policy } from "../models/entities/policy.entity";
import { PolicyService } from "../services/policiesService";
import { inject } from "inversify";
import { injectable } from "inversify";

@injectable()
export class CreatePolicyUseCase {
    constructor(
        @inject(PolicyService)
        private readonly policyService: PolicyService,

        @inject(PolicyMapper)
        private readonly policyMapper: PolicyMapper
    ) { }

    async execute(createPolicyDto: any) {
        const policy: Policy = await this.policyService.savePolicy(createPolicyDto);
        return {
            policy: this.policyMapper.entitytoResponseDto(policy)
        }
    }
}