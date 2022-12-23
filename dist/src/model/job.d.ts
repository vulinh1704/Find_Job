import { Cv } from "./cv";
import { Company } from "./company";
export declare class Job {
    readonly id: number;
    title: string;
    numberOfPositions: number;
    level: string;
    experience: string;
    endDate: Date;
    cvs: Cv[];
    company: Company;
}
