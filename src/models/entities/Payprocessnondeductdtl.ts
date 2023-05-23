import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_PAYPROCESSNONDEDUCTDTL",
  ["payid", "empcode", "deductionid", "loanrefno"],
  { unique: true }
)
@Entity("PAYPROCESSNONDEDUCTDTL", { schema: "dbo" })
export class Payprocessnondeductdtl {
  @Column("int", { primary: true, name: "PAYID" })
  payid: number;

  @Column("int", { name: "PAYCYCLE" })
  paycycle: number;

  @Column("varchar", { primary: true, name: "EMPCODE", length: 15 })
  empcode: string;

  @Column("int", { primary: true, name: "DEDUCTIONID" })
  deductionid: number;

  @Column("int", { primary: true, name: "LOANREFNO" })
  loanrefno: number;

  @Column("int", { name: "PAYMONTH" })
  paymonth: number;

  @Column("int", { name: "PAYYEAR" })
  payyear: number;

  @Column("numeric", { name: "AMOUNT", precision: 18, scale: 2 })
  amount: number;
}
