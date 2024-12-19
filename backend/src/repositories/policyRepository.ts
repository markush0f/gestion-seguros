import { Policy } from "@/models/entities/policy.entity";
import { myDataSource } from "@/app-data-source"
import { Repository } from "typeorm";
import { injectable } from "inversify";

@injectable()
export class PolicyRepository extends Repository<Policy> {

}