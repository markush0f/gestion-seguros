import { CreatePolicyDto } from "../models/dtos/CreatePolicyDto";
import { ResponsePolicyDto } from "../models/dtos/ResponsePolicyDto";
import { Request, Response } from 'express';

export class PolicyController {


    async savePolicy(req: Request, res: Response): Promise<void> {
        try {
            const createPolicyDto = req.body; 
            const responsePolicyDto = await this.createPolicy(createPolicyDto); 
            res.status(201).json(responsePolicyDto);
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }

    async deletePolicy(id: number): Promise<void> {
        throw new Error('Method not implemented.');
    }

    private async createPolicy(createPolicyDto: any): Promise<any> {
        // Implementar lógica de creación de la póliza
        return { id: 1, ...createPolicyDto }; // Ejemplo
    }
}