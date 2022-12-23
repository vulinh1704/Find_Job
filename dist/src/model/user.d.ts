import { Cv } from "./cv";
export declare class User {
    readonly id: number;
    username: string;
    email: string;
    password: string;
    phone: string;
    cvs: Cv[];
}
