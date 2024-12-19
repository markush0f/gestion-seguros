import { createContainer, asClass } from 'awilix';
import { PolicyRepository } from './repositories/policyRepository';
import { PolicyController } from './controllers/policy.controller';
import { IPolicyService } from './services/policy.service.interface';
import { PolicyMapper } from './mappers/policy.mapper';
import { PolicyServiceImpl } from './services/policy.service.impl';


const container = createContainer();

container.register({
    policyRepository: asClass(PolicyRepository).singleton(),
    policyService: asClass(PolicyServiceImpl).singleton(),
    policyController: asClass(PolicyController).singleton(),
    policyMapper: asClass(PolicyMapper).singleton(),
    
});

export { container };