import { Router } from "express";
import { PolicyController } from "../controllers/policy.controller";
import { makeClassInvoker } from "awilix-express";

const policyRouter = Router();
const policyController = makeClassInvoker(PolicyController);
policyRouter.post("/", policyController("savePolicy"));
policyRouter.get("/", policyController("findAllPolicies"));
policyRouter.get("/:id", policyController("findOnePolicyById"));
policyRouter.delete("/:id", policyController("deletePolicyById"));
policyRouter.get("/customer/:customerId", policyController("findAllPoliciesByCustomerId"));


export default policyRouter;