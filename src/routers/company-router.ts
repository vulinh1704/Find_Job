import {Router} from "express";
import companyController from "../controller/company-controller";

export const companyRouter = Router();
companyRouter.get('', companyController.getAll)