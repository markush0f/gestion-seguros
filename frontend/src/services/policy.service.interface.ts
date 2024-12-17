import { CreatePolicyDto } from "../models/dtos/CreatePolicyDto";
import { ResponsePolicyDto } from "../models/dtos/ResponsePolicyDto";
import { Policy } from "../models/entities/policy.entity";

export interface IPolicy {
    savePolicy(createPolicyDto: CreatePolicyDto): Promise<ResponsePolicyDto>;
    deletePolicy(id: number): Promise<void>;
    findPolicyById(id: number): Promise<Policy>;
    
}