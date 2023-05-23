import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Employeemaster } from "./Employeemaster";

@Index("PK_MASTERPASSAGE", ["passageid"], { unique: true })
@Entity("MASTERPASSAGE", { schema: "dbo" })
export class Masterpassage {
  @PrimaryGeneratedColumn({ type: "int", name: "PASSAGEID" })
  passageid: number;

  @Column("varchar", { name: "PASSAGECODE", length: 10 })
  passagecode: string;

  @Column("varchar", { name: "PASSAGENAME", length: 100 })
  passagename: string;

  @Column("int", { name: "EARNINGSID" })
  earningsid: number;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;

  @OneToMany(() => Employeemaster, (employeemaster) => employeemaster.passage)
  employeemasters: Employeemaster[];
}
