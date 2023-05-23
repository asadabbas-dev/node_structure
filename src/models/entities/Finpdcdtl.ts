import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_FINPDCDTL",
  ["doctype", "subtype", "docnumber", "docdate", "accountcode"],
  { unique: true }
)
@Entity("FINPDCDTL", { schema: "dbo" })
export class Finpdcdtl {
  @Column("varchar", { primary: true, name: "DOCTYPE", length: 5 })
  doctype: string;

  @Column("varchar", { primary: true, name: "SUBTYPE", length: 5 })
  subtype: string;

  @Column("varchar", { primary: true, name: "DOCNUMBER", length: 20 })
  docnumber: string;

  @Column("date", { primary: true, name: "DOCDATE" })
  docdate: Date;

  @Column("varchar", { primary: true, name: "ACCOUNTCODE", length: 20 })
  accountcode: string;

  @Column("varchar", { name: "COSTCODE", length: 20 })
  costcode: string;

  @Column("varchar", { name: "SUBLEDGER", nullable: true, length: 20 })
  subledger: string | null;

  @Column("varchar", { name: "DBCRCODE", length: 5 })
  dbcrcode: string;

  @Column("numeric", { name: "AMOUNT", precision: 18, scale: 2 })
  amount: number;

  @Column("varchar", { name: "CHEQUENO", length: 50 })
  chequeno: string;

  @Column("date", { name: "CHEQUEDATE" })
  chequedate: Date;

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

  @Column("bit", { name: "STATUS" })
  status: boolean;
}
