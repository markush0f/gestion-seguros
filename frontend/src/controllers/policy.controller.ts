import { Request, Response } from 'express';
import { PolicyService } from "../services/policiesService";

export class PolicyController {

    private policyService: PolicyService;

    constructor() {
        this.policyService = new PolicyService();
    }

    async savePolicy(req: Request, res: Response): Promise<void> {
        try {
            const createPolicyDto = req.body;
            const responsePolicyDto = await this.policyService.savePolicy(createPolicyDto);
            res.status(201).json(responsePolicyDto);
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }

    async deletePolicy(id: number): Promise<void> {
        throw new Error('Method not implemented.');
    }

}