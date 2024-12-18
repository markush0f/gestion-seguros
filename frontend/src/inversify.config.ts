// inversify.config.ts
import { Container } from 'inversify';
import { TYPES } from './types';  // Importar los identificadores
import { PolicyService } from './services/policiesService';
import { PolicyController } from './controllers/policy.controller';
import { CreatePolicyUseCase } from './usercases/CreatePolicyUseCase';
import { PolicyRepository } from './repositories/policyRepository';
import { PolicyMapper } from './mappers/policy.mapper';

const container = new Container();

// Registrar con los símbolos definidos en TYPES
container.bind<PolicyRepository>(TYPES.PolicyRepository).to(PolicyRepository);
container.bind<CreatePolicyUseCase>(TYPES.CreatePolicyUseCase).to(CreatePolicyUseCase);
container.bind<PolicyService>(TYPES.PolicyService).to(PolicyService);
container.bind<PolicyController>(TYPES.PolicyController).to(PolicyController);
container.bind<PolicyMapper>(TYPES.PolicyMapper).to(PolicyMapper);

export { container };
