import { Column, Entity, Index } from "typeorm";

@Index("PK_EMPCOMPENDETAIL", ["empid", "allowanceid"], { unique: true })
@Entity("EMPCOMPENDETAIL", { schema: "dbo" })
export class Empcompendetail {
  @Column("int", { primary: true, name: "EMPID" })
  empid: number;

  @Column("int", { primary: true, name: "ALLOWANCEID" })
  allowanceid: number;

  @Column("bit", { name: "ALLOWANCETYPE" })
  allowancetype: boolean;

  @Column("numeric", { name: "AMOUNT", precision: 18, scale: 2 })
  amount: number;

  @Column("bit", { name: "PAYCALCFLAG" })
  paycalcflag: boolean;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
