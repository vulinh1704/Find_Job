import {AppDataSource} from "../data-source";
import {Cv} from "../model/cv";

export class CvService {
    private cvRepository: any

    constructor() {
        this.cvRepository = AppDataSource.getRepository(Cv)
    }

    findAll = async (idUser) => {
        return await this.cvRepository.find({
            relations: {
                user: true
            },
            where: {
                user: {
                    id: idUser
                }
            }
        })

    }
}