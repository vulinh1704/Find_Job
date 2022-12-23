import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user";

@Entity()
export class Cv {
    @PrimaryGeneratedColumn()
    public readonly id: number;
    @Column({type: 'text'})
    public image: string;
    @ManyToOne(() => User, (user) => user.cvs)
    user: User
}