import { Column, Entity } from "typeorm";

@Entity("FINBANKPAYDTL", { schema: "dbo" })
export class Finbankpaydtl {
  @Column("varchar", { name: "DOCTYPE", length: 5 })
  doctype: string;

  @Column("varchar", { name: "SUBTYPE", length: 5 })
  subtype: string;

  @Column("varchar", { name: "DOCNUMBER", length: 20 })
  docnumber: string;

  @Column("date", { name: "DOCDATE" })
  docdate: Date;

  @Column("varchar", { name: "ACCOUNTCODE", length: 20 })
  accountcode: string;

  @Column("varchar", { name: "COSTCODE", length: 20 })
  costcode: string;

  @Column("varchar", { name: "SUBLEDGER", nullable: true, length: 20 })
  subledger: string | null;

  @Column("varchar", { name: "DBCRCODE", length: 5 })
  dbcrcode: string;

  @Column("numeric", { name: "AMOUNT", precision: 18, scale: 2 })
  amount: number;

  @Column("varchar", { name: "CHEQUENO", nullable: true, length: 50 })
  chequeno: string | null;

  @Column("date", { name: "CHEQUEDATE", nullable: true })
  chequedate: Date | null;

  @Column("varchar", { name: "TRANSCODE", length: 5 })
  transcode: string;

  @Column("varchar", { name: "PAYTYPE", length: 5 })
  paytype: string;

  @Column("varchar", { name: "REFDOCTYPE", nullable: true, length: 5 })
  refdoctype: string | null;

  @Column("varchar", { name: "REFSUBTYPE", nullable: true, length: 5 })
  refsubtype: string | null;

  @Column("varchar", { name: "REFDOCNO", nullable: true, length: 20 })
  refdocno: string | null;

  @Column("date", { name: "REFDOCDATE", nullable: true })
  refdocdate: Date | null;

  @Column("bit", { name: "ISCONVERTED" })
  isconverted: boolean;
}
