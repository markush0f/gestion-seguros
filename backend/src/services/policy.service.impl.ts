import { PolicyMapper } from "@/mappers/policy.mapper";
import { Policy } from "../models/entities/policy.entity";
import { PolicyRepository } from "../repositories/policyRepository";
import { IPolicyService } from "./policy.service.interface";
import { CreatePolicyDto } from "@/models/dtos/CreatePolicy.dto";
import { myDataSource } from "../app-data-source";

interface PoliceServiceImplDependendency {
    policyMapper: PolicyMapper;
}

export class PolicyServiceImpl implements IPolicyService {
    private readonly policyMapper: PolicyMapper;
    private readonly policyRepository: PolicyRepository = myDataSource.getRepository(Policy);

    constructor({ policyMapper }: PoliceServiceImplDependendency) {
        this.policyMapper = policyMapper;
    }

    async savePolicy(createPolicyDto: any): Promise<Policy> {
        try {
            const policy = this.policyMapper.createPolicyDtoToEntity(createPolicyDto);
            return await this.policyRepository.save(policy);
        } catch (error) {
            console.log(error);
            throw new Error("Error saving policy");
        }
    }

    async deletePolicy(id: number): Promise<void> {
        try {
            if (! await this.policyRepository.findOneBy({ id: id })) {
                throw new Error("Policy not found");
            }
            await this.policyRepository.delete(id).then((error) => {
                console.log(error);
                throw new Error("Error deleting policy");
            });
        } catch (error) {
            console.log(error);
            throw new Error("Error deleting policy");
        }
    }

    async findOnePolicyById(id: number): Promise<CreatePolicyDto> {
        try {
            const policy = await this.policyRepository.findOneBy({ id: id });
            if (!policy) {
                throw new Error("Policy not found");
            }
            return this.policyMapper.entitytoResponseDto(policy);
        } catch (error) {
            console.error(error);
            throw new Error("Error finding policy by id");
        }
    }

    updatePolictById(id: number, createPolicyDto: CreatePolicyDto): Promise<CreatePolicyDto> {
        throw new Error("Method not implemented.");
    }

    async findAllPolicies(): Promise<CreatePolicyDto[]> {
        try {
            return await this.policyRepository.find();
        } catch (error) {
            console.log(error);
            throw new Error("Error finding policies");
        }
    }

    async findAllPoliciesByCustomerId(customerId: number): Promise<CreatePolicyDto[]> {
        throw new Error("Method not implemented.");
    }


}