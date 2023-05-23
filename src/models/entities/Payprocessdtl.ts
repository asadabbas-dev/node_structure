import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_PAYPROCESSDTL",
  ["payid", "empcode", "startdate", "enddate", "earndedid", "loanrefno"],
  { unique: true }
)
@Entity("PAYPROCESSDTL", { schema: "dbo" })
export class Payprocessdtl {
  @Column("int", { primary: true, name: "PAYID" })
  payid: number;

  @Column("int", { name: "PAYCYCLE" })
  paycycle: number;

  @Column("varchar", { primary: true, name: "EMPCODE", length: 15 })
  empcode: string;

  @Column("date", { primary: true, name: "STARTDATE" })
  startdate: Date;

  @Column("date", { primary: true, name: "ENDDATE" })
  enddate: Date;

  @Column("int", { primary: true, name: "EARNDEDID" })
  earndedid: number;

  @Column("int", { primary: true, name: "LOANREFNO" })
  loanrefno: number;

  @Column("char", { name: "EARNDEDTYPE", length: 1 })
  earndedtype: string;

  @Column("numeric", { name: "AMOUNT", precision: 18, scale: 2 })
  amount: number;
}
