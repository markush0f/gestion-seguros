import { Router } from "express";
import { container } from "../container.config";
import { PolicyController } from "../controllers/policy.controller";
import { TYPES } from "../types";

const policyRouter = Router();

const policyController = container.get<PolicyController>(TYPES.PolicyController);
policyRouter.post("/", policyController.savePolicy);

export default policyRouter;