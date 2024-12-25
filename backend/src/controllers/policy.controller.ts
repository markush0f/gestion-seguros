import { Request, Response } from 'express';
import { CreatePolicyDto } from '@/models/dtos/CreatePolicy.dto';
import { IPolicyService } from '@/services/policy.service.interface';
import { UpdatePolicyDto } from '@/models/dtos/UpdatePolicy.dto';

interface PolicyControllerDependency {
    policyService: IPolicyService;
}

export class PolicyController {
    private readonly policyService: IPolicyService;

    constructor(
        { policyService }: PolicyControllerDependency,
    ) {
        this.policyService = policyService;
    }

    async savePolicy(req: Request, res: Response): Promise<void> {
        try {
            const createPolicyDto: CreatePolicyDto = req.body;
            console.log('Received createPolicyDto:', createPolicyDto);
            const responsePolicyDto = await this.policyService.savePolicy(createPolicyDto);
            res.status(201).json(responsePolicyDto);

        } catch (error) {
            console.log("Controller: ", error);
            res.status(500).json({ message: error });
        }
    }

    async deletePolicyById(req: Request, res: Response): Promise<void> {
        try {
            await this.policyService.deletePolicy(Number(req.params.id));
            res.status(204).json();
        } catch (error) {
            console.log("Controller: ", error);
            res.status(500).json({ message: error });
        }
    }

    async updatePolicyById(req: Request, res: Response): Promise<void> {
        try {
            const updatePolicyDto: UpdatePolicyDto = req.body;
            const responsePolicyDto = await this.policyService.updatePolictById(Number(req.params.id), updatePolicyDto);
            res.status(200).json(responsePolicyDto);
        } catch (error) {
            console.log("Controller: ", error);
            res.status(500).json({ message: error });
        }
    }

    async findOnePolicyById(req: Request, res: Response): Promise<void> {
        try {
            const responsePolicyDto = await this.policyService.findOnePolicyById(Number(req.params.id));
            res.status(200).json(responsePolicyDto);
        } catch (error) {
            console.log("Controller: ", error);
            res.status(500).json({ message: error });
        }
    }

    async findAllPolicies(req: Request, res: Response): Promise<void> {
        try {
            const responsePolicyDto = await this.policyService.findAllPolicies();
            res.status(200).json(responsePolicyDto);
        } catch (error) {
            console.log("Controller: ", error);
            res.status(500).json({ message: error });
        }
    }

    async findAllPoliciesByCustomerId(req: Request, res: Response): Promise<void> {
        try {
            const customerId = Number(req.params.customerId);
            const responsePolicyDto = await this.policyService.findAllPoliciesByCustomerId(customerId);
            res.status(200).json(responsePolicyDto);
        } catch (error) {
            console.log("Controller: ", error);
            res.status(500).json({ message: error });
        }
    }

}