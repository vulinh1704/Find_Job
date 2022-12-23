import { User } from "./user";
import { Job } from "./job";
export declare class Company {
    readonly id: number;
    name: string;
    email: string;
    description: string;
    image: string;
    address: string;
    numberOfStaff: number;
    linkMap: string;
    users: User[];
    jobs: Job[];
}
