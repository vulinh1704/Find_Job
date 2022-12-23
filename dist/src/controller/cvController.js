"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cvService_1 = require("../service/cvService");
class CvController {
    constructor() {
        this.showAll = async (req, res) => {
            try {
                let cv = await this.cvService.findAll(req.params.id);
                return res.status(200).json(cv);
            }
            catch (e) {
                return res.json(e.message);
            }
        };
        this.cvService = new cvService_1.CvService();
    }
}
exports.default = new CvController;
//# sourceMappingURL=cvController.js.map