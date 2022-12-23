"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const company_service_1 = require("../service/company-service");
class CompanyController {
    constructor() {
        this.getAll = async (req, res) => {
            try {
                let companies = await this.companyService.findAll();
                res.status(200).json(companies);
            }
            catch (e) {
                res.json({
                    mess: 'Loi'
                });
            }
        };
        this.companyService = new company_service_1.CompanyService();
    }
}
exports.default = new CompanyController();
//# sourceMappingURL=company-controller.js.map