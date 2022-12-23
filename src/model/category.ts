import {Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user";
import {Job} from "./job";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    public readonly id: number;
    @Column({type: 'text'})
    public name: string;
    @ManyToMany(() => Job)
    @JoinTable()
    jobs:Job[]
}