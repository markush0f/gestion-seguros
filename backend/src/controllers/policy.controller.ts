import { Request, Response } from 'express';

import { PolicyService } from "../services/policiesService";
import { CreatePolicyDto } from '@/models/dtos/CreatePolicyDto';
import { CreatePolicyUseCase } from '../usercases/CreatePolicyUseCase';
import { injectable } from 'inversify';
import { inject } from 'inversify';

@injectable()
export class PolicyController {
    private createPolicyUseCase: CreatePolicyUseCase;

    constructor(
        @inject(CreatePolicyUseCase) createPolicyUseCase: CreatePolicyUseCase,
    ) {
        this.createPolicyUseCase = createPolicyUseCase;
    }

    async savePolicy(req: Request, res: Response): Promise<void> {
        try {
            const createPolicyDto: CreatePolicyDto = req.body;
            console.log('Received createPolicyDto:', createPolicyDto);
            const responsePolicyDto = await this.createPolicyUseCase.execute(createPolicyDto);
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