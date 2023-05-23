import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_LOANWAVING", ["loanwaveid"], { unique: true })
@Entity("LOANWAVING", { schema: "dbo" })
export class Loanwaving {
  @PrimaryGeneratedColumn({ type: "int", name: "LOANWAVEID" })
  loanwaveid: number;

  @Column("int", { name: "WAVEMONTH" })
  wavemonth: number;

  @Column("int", { name: "WAVEYEAR" })
  waveyear: number;

  @Column("int", { name: "LOANREFNO" })
  loanrefno: number;

  @Column("int", { name: "EMPID" })
  empid: number;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
