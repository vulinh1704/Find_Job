import { Request, Response } from "express";
declare class CompanyController {
    private companyService;
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
}
declare const _default: CompanyController;
export default _default;
