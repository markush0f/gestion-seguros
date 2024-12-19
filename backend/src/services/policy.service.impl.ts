import { Policy } from "../models/entities/policy.entity";
import { PolicyResponseDto } from "../models/dtos/PolicyResponseDto";
import { PolicyRepository } from "../repositories/policyRepository";
import { myDataSource } from "../app-data-source";
import { PolicyMapper } from "../mappers/policy.mapper";
import { inject } from "inversify";
import { injectable } from "inversify";
import { IPolicyService } from "./policy.service.interface";
import { CreatePolicyDto } from "@/models/dtos/CreatePolicyDto";

interface PoliceServiceImplDependendency {
    policyRepository: PolicyRepository;
}

export class PolicyServiceImpl implements IPolicyService {
    private readonly policyRepository: PolicyRepository;

    constructor(
        { policyRepository }: PoliceServiceImplDependendency

    ) { 
        this.policyRepository = policyRepository;
    }
    deletePolicy(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findOnePolicyById(id: number): Promise<CreatePolicyDto> {
        throw new Error("Method not implemented.");
    }
    findAllPolicies(): Promise<CreatePolicyDto[]> {
        throw new Error("Method not implemented.");
    }
    findAllPoliciesByCustomerId(customerId: number): Promise<CreatePolicyDto[]> {
        throw new Error("Method not implemented.");
    }

    async savePolicy(createPolicyDto: any): Promise<Policy> {
        try {
            return await this.policyRepository.save(createPolicyDto);
        } catch (error) {
            console.log(error);
            throw new Error("");
        }
    }
}