import {AppDataSource} from "../data-source";
import {Company} from "../model/company";

export class CompanyService {
    private companyService: any;
    constructor() {
        this.companyService = AppDataSource.getRepository(Company)
    }
    findAll = async () => {
        let companies = await this.companyService.find({
            relations: {
                users: true,
                jobs: true
            }
        });
        return companies
    }

}