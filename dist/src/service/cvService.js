"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CvService = void 0;
const data_source_1 = require("../data-source");
const cv_1 = require("../model/cv");
class CvService {
    constructor() {
        this.findAll = async (idUser) => {
            return await this.cvRepository.find({
                relations: {
                    user: true
                },
                where: {
                    user: {
                        id: idUser
                    }
                }
            });
        };
        this.cvRepository = data_source_1.AppDataSource.getRepository(cv_1.Cv);
    }
}
exports.CvService = CvService;
//# sourceMappingURL=cvService.js.map