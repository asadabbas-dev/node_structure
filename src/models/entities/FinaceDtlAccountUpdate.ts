import { Column, Entity } from "typeorm";

@Entity("FinaceDtlAccountUpdate", { schema: "dbo" })
export class FinaceDtlAccountUpdate {
  @Column("varchar", { name: "Code", length: 150 })
  code: string;

  @Column("varchar", { name: "costprice", length: 150 })
  costprice: string;

  @Column("numeric", { name: "FINTRANSID", precision: 18, scale: 0 })
  fintransid: number;

  @Column("varchar", { name: "DOCTYPE", length: 5 })
  doctype: string;

  @Column("varchar", { name: "SUBTYPE", length: 5 })
  subtype: string;

  @Column("varchar", { name: "DOCNUMBER", length: 20 })
  docnumber: string;

  @Column("date", { name: "DOCDATE" })
  docdate: Date;

  @Column("date", { name: "DOCDUEDATE", nullable: true })
  docduedate: Date | null;

  @Column("int", { name: "SERIALNO" })
  serialno: number;

  @Column("varchar", { name: "ACCOUNTCODE", length: 20 })
  accountcode: string;

  @Column("varchar", { name: "COSTCODE", length: 20 })
  costcode: string;

  @Column("varchar", { name: "SUBLEDGER", nullable: true, length: 20 })
  subledger: string | null;

  @Column("varchar", { name: "TRANSCODE", nullable: true, length: 3 })
  transcode: string | null;

  @Column("varchar", { name: "PAYTYPE", nullable: true, length: 3 })
  paytype: string | null;

  @Column("varchar", { name: "NARATION", nullable: true })
  naration: string | null;

  @Column("varchar", { name: "DBCRCODE", length: 1 })
  dbcrcode: string;

  @Column("varchar", { name: "CURRENCY", nullable: true, length: 5 })
  currency: string | null;

  @Column("numeric", { name: "EXCHANGE", precision: 18, scale: 2 })
  exchange: number;

  @Column("numeric", { name: "LOCALAMT", precision: 18, scale: 2 })
  localamt: number;

  @Column("numeric", { name: "FORIEGNAMT", precision: 18, scale: 2 })
  foriegnamt: number;

  @Column("numeric", { name: "ADJLOCAMT", precision: 18, scale: 2 })
  adjlocamt: number;

  @Column("numeric", { name: "ADJFORAMT", precision: 18, scale: 2 })
  adjforamt: number;

  @Column("varchar", { name: "REFDOCNO", nullable: true, length: 20 })
  refdocno: string | null;

  @Column("date", { name: "REFDOCDATE", nullable: true })
  refdocdate: Date | null;

  @Column("varchar", { name: "REFDOCTYPE", nullable: true, length: 5 })
  refdoctype: string | null;

  @Column("varchar", { name: "REFDOCSUBTYPE", nullable: true, length: 5 })
  refdocsubtype: string | null;

  @Column("int", { name: "REFDOCSERIALNO", nullable: true })
  refdocserialno: number | null;

  @Column("varchar", { name: "REFDOCDBCRCODE", nullable: true, length: 1 })
  refdocdbcrcode: string | null;

  @Column("varchar", { name: "REFNUMBER", nullable: true, length: 50 })
  refnumber: string | null;

  @Column("date", { name: "REFDATE", nullable: true })
  refdate: Date | null;

  @Column("varchar", { name: "INTDOCNO", nullable: true, length: 20 })
  intdocno: string | null;

  @Column("date", { name: "INTDOCDATE", nullable: true })
  intdocdate: Date | null;

  @Column("varchar", { name: "INTDOCTYPE", nullable: true, length: 5 })
  intdoctype: string | null;

  @Column("varchar", { name: "INTDOCSUBTYPE", nullable: true, length: 5 })
  intdocsubtype: string | null;

  @Column("bit", { name: "STATUS" })
  status: boolean;

  @Column("bit", { name: "ALLOCATIONFLG" })
  allocationflg: boolean;

  @Column("date", { name: "POSTDATE", nullable: true })
  postdate: Date | null;

  @Column("varchar", { name: "POSTUSER", nullable: true, length: 50 })
  postuser: string | null;

  @Column("varchar", { name: "CHEQUENO", nullable: true, length: 50 })
  chequeno: string | null;

  @Column("date", { name: "CHEQUEDATE", nullable: true })
  chequedate: Date | null;

  @Column("varchar", { name: "BANKCODE", nullable: true, length: 50 })
  bankcode: string | null;

  @Column("varchar", { name: "BRANCH", nullable: true, length: 50 })
  branch: string | null;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
