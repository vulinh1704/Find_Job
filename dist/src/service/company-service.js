"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyService = void 0;
const data_source_1 = require("../data-source");
const company_1 = require("../model/company");
class CompanyService {
    constructor() {
        this.findAll = async () => {
            let companies = await this.companyService.find({
                relations: {
                    users: true,
                    jobs: true
                }
            });
            return companies;
        };
        this.add = async (data) => {
            let companies = await this.companyService.save(data);
            return companies;
        };
        this.companyService = data_source_1.AppDataSource.getRepository(company_1.Company);
    }
}
exports.CompanyService = CompanyService;
//# sourceMappingURL=company-service.js.map