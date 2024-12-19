import { CreatePolicyDto } from "@/models/dtos/CreatePolicyDto";

export interface IPolicyService {
    savePolicy(createPolicyDto: any): Promise<CreatePolicyDto>;

    deletePolicy(id: number): Promise<void>;

    findOnePolicyById(id:number): Promise<CreatePolicyDto>;

    findAllPolicies(): Promise<CreatePolicyDto[]>;

    findAllPoliciesByCustomerId(customerId: number): Promise<CreatePolicyDto[]>;

}