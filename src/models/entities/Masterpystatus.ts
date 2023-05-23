import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Employeemaster } from "./Employeemaster";

@Index("PK_MASTERPYSTATUS", ["statusid"], { unique: true })
@Entity("MASTERPYSTATUS", { schema: "dbo" })
export class Masterpystatus {
  @PrimaryGeneratedColumn({ type: "int", name: "STATUSID" })
  statusid: number;

  @Column("varchar", { name: "STATUSCODE", length: 5 })
  statuscode: string;

  @Column("varchar", { name: "DESCRIPTION", length: 50 })
  description: string;

  @Column("bit", { name: "GRATUITYTYPE", nullable: true })
  gratuitytype: boolean | null;

  @Column("bit", { name: "ISACTIVE" })
  isactive: boolean;

  @Column("bit", { name: "AFFECTPAYROLL" })
  affectpayroll: boolean;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;

  @OneToMany(() => Employeemaster, (employeemaster) => employeemaster.status)
  employeemasters: Employeemaster[];
}
