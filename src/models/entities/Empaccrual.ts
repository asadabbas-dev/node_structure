import { Column, Entity } from "typeorm";

@Entity("EMPACCRUAL", { schema: "dbo" })
export class Empaccrual {
  @Column("varchar", { name: "DOCNUMBER", length: 10 })
  docnumber: string;

  @Column("date", { name: "PROCESSDATE" })
  processdate: Date;

  @Column("date", { name: "DOCDATE" })
  docdate: Date;

  @Column("int", { name: "PROVISIONTYPE" })
  provisiontype: number;

  @Column("int", { name: "PAYCYCLE" })
  paycycle: number;

  @Column("int", { name: "ACCRUALTYPE" })
  accrualtype: number;

  @Column("int", { name: "EMPCODE" })
  empcode: number;

  @Column("int", { name: "GRATUITYID" })
  gratuityid: number;

  @Column("numeric", { name: "DEBIT", precision: 18, scale: 2 })
  debit: number;

  @Column("numeric", { name: "CREDIT", precision: 18, scale: 2 })
  credit: number;

  @Column("varchar", { name: "ACCOUNTCODE", length: 10 })
  accountcode: string;

  @Column("varchar", { name: "COSTCODE", length: 10 })
  costcode: string;

  @Column("varchar", { name: "SUBLEDGER", length: 10 })
  subledger: string;

  @Column("bit", { name: "ISACTIVE" })
  isactive: boolean;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
