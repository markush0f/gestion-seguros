import { Router } from "express";
import { PolicyController } from "../controllers/policy.controller";

const policyRouter = Router();
const policyController = new PolicyController();

policyRouter.post("/", policyController.savePolicy);