import { Request, Response } from 'express';
import { CreatePolicyDto } from '@/models/dtos/CreatePolicyDto';
import { injectable } from 'inversify';
import { inject } from 'inversify';
import { IPolicyService } from '@/services/policy.service.interface';


interface PolicyControllerDependency {
    policyService: IPolicyService;
}

export class PolicyController {
    private policyService: IPolicyService;

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

    async deletePolicy(id: number): Promise<void> {
        throw new Error('Method not implemented.');
    }

}