import { Policy } from "@/models/entities/policy.entity";

export class PolicyMapper {
    public entitytoResponseDto(policy: Policy) {
        return {
            id: policy.id,
            customerID: policy.customerID,
            policyType: policy.policyType,
            startDate: policy.startDate,
            endDate: policy.endDate,
            coverageAmount: policy.coverageAmount,
            premium: policy.premium
        };
    }
    public createPolicyDtoToEntity(policyResponseDto: any) {
        return {
            customerID: policyResponseDto.customerID,
            policyType: policyResponseDto.policyType,
            startDate: policyResponseDto.startDate,
            endDate: policyResponseDto.endDate,
            coverageAmount: policyResponseDto.coverageAmount,
            premium: policyResponseDto.premium
        };

    }


}