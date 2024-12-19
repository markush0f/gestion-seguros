import { createContainer, asClass } from 'awilix';
import { PolicyRepository } from './repositories/policyRepository';
import { PolicyService } from './services/policiesService';


const container = createContainer();

container.register({
    policyRepository: asClass(PolicyRepository).singleton(),
    policyService: asClass(PolicyService).singleton(),
});

export { container };