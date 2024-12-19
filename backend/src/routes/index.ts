import { Router } from 'express';
import policyRouter from './policy.routes';


const apiRoutes = Router();

apiRoutes.use('/policy', policyRouter);

export default apiRoutes;
