import { Request, Response } from "express";
declare class CvController {
    private cvService;
    constructor();
    showAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: CvController;
export default _default;
