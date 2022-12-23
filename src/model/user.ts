import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Cv} from "./cv";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    public readonly id: number;
    @Column({type: 'varchar'})
    public username: string;
    @Column({type: 'varchar'})
    public email: string;
    @Column({type: 'varchar'})
    public password: string;
    @Column({type: 'varchar'})
    public phone: string;
    @OneToMany(() => Cv, (cv) => cv.user)
    cvs:Cv[]
}