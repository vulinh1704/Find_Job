import {CvService} from "../service/cvService";
import {Request, Response} from "express";

class CvController {
    private cvService: CvService;

    constructor() {
        this.cvService = new CvService()
    }

    showAll = async (req: Request, res: Response) => {
        try {
            let cv = await this.cvService.findAll(req.params.id)

            return res.status(200).json(cv)
        } catch (e) {
            return res.json(e.message)
        }

    }
}

export default new CvController