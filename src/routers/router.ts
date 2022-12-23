import {Router} from "express";
import {companyRouter} from "./company-router";
import {cvRouter} from "./cvRouter";

export const router = Router();
router.use('/companies', companyRouter)
router.use('/cv',cvRouter)