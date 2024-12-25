import { CreatePolicyDto } from "@/models/dtos/CreatePolicy.dto";
import { UpdatePolicyDto } from "@/models/dtos/UpdatePolicy.dto";

export interface IPolicyService {
    savePolicy(createPolicyDto: any): Promise<CreatePolicyDto>;

    deletePolicy(id: number): Promise<void>;

    updatePolictById(id: number, updatePolicyDto: UpdatePolicyDto): Promise<CreatePolicyDto>;

    findOnePolicyById(id: number): Promise<CreatePolicyDto>;

    findAllPolicies(): Promise<CreatePolicyDto[]>;

    findAllPoliciesByCustomerId(customerId: number): Promise<CreatePolicyDto[]>;

}