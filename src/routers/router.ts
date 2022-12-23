import {Router} from "express";
import {companyRouter} from "./company-router";

export const router = Router();
router.use('/companies', companyRouter)