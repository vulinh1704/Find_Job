import {Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user";
import {Job} from "./job";

@Entity()
export class Company {
    @PrimaryGeneratedColumn()
    public readonly id: number;
    @Column({type: 'varchar'})
    public name: string;
    @Column({type:'varchar'})
    public email:string;
    @Column({type:'text'})
    public description:string
    @Column({type:'varchar'})
    public image:string
    @Column({type:'varchar'})
    public address:string
    @Column({type:'int'})
    public numberOfStaff :number
    @Column({type:'varchar'})
    public linkMap:string
    @ManyToMany(()=>User)
    @JoinTable({name:'company_user'})
    users:User[]
    @OneToMany(() => Job, (job) => job.company)
    jobs: Job[]

}