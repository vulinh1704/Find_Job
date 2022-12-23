import {CompanyService} from "../service/company-service";
import {Request, Response} from "express";

class CompanyController {
    private companyService: CompanyService

    constructor() {
        this.companyService = new CompanyService()
    }
    getAll = async (req: Request, res: Response) => {
        try{
            let companies = await this.companyService.findAll()
            res.status(200).json(companies)
        }
        catch (e){
            res.json({
                mess: 'Loi'
            })
        }
    }
}
export default new CompanyController();