import {Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Cv} from "./cv";
import {Company} from "./company";

@Entity()
export class Job{
    @PrimaryGeneratedColumn()
    public readonly id:number
    @Column({type:'varchar'})
    public title:string
    @Column({type:'int'})
    public numberOfPositions:number
    @Column({type:'varchar'})
    public level:string
    @Column({type:'varchar'})
    public experience:string
    @Column({type:'date'})
    public endDate:Date
    @ManyToMany(() => Cv)
    @JoinTable({name: 'job_cv'})
    cvs: Cv[]
    @ManyToOne(() => Company, (company) => company.jobs)
    company: Company
}