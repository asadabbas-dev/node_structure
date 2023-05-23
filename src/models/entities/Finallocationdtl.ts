import { Column, Entity } from "typeorm";

@Entity("FINALLOCATIONDTL", { schema: "dbo" })
export class Finallocationdtl {
  @Column("varchar", { name: "DOCTYPE", length: 5 })
  doctype: string;

  @Column("int", { name: "SUBTYPE" })
  subtype: number;

  @Column("varchar", { name: "DOCNUMBER", length: 15 })
  docnumber: string;

  @Column("date", { name: "DOCDATE" })
  docdate: Date;

  @Column("int", { name: "SERIALNO" })
  serialno: number;

  @Column("varchar", { name: "ACCOUNTCODE", length: 15 })
  accountcode: string;

  @Column("varchar", { name: "COSTCODE", length: 15 })
  costcode: string;

  @Column("varchar", { name: "SUBLEDGER", nullable: true, length: 15 })
  subledger: string | null;

  @Column("varchar", { name: "DBCRCODE", length: 1 })
  dbcrcode: string;

  @Column("varchar", { name: "RDOCTYPE", length: 5 })
  rdoctype: string;

  @Column("int", { name: "RSUBTYPE" })
  rsubtype: number;

  @Column("varchar", { name: "RDOCNUMBR", length: 15 })
  rdocnumbr: string;

  @Column("date", { name: "RDOCDATE" })
  rdocdate: Date;

  @Column("int", { name: "RSERIALNO" })
  rserialno: number;

  @Column("varchar", { name: "RDBCRCODE", length: 1 })
  rdbcrcode: string;

  @Column("numeric", { name: "LOCALAMT", precision: 18, scale: 2 })
  localamt: number;

  @Column("varchar", { name: "PAYTYPE", nullable: true, length: 2 })
  paytype: string | null;

  @Column("varchar", { name: "TRANSCODE", nullable: true, length: 2 })
  transcode: string | null;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
