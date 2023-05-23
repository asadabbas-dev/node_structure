import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_LVSETTLEMENTNONDEDUCTDTL",
  ["transid", "empcode", "startdate", "enddate", "earningsid"],
  { unique: true }
)
@Entity("LVSETTLEMENTNONDEDUCTDTL", { schema: "dbo" })
export class Lvsettlementnondeductdtl {
  @Column("int", { primary: true, name: "TRANSID" })
  transid: number;

  @Column("varchar", { primary: true, name: "EMPCODE", length: 15 })
  empcode: string;

  @Column("date", { primary: true, name: "STARTDATE" })
  startdate: Date;

  @Column("date", { primary: true, name: "ENDDATE" })
  enddate: Date;

  @Column("int", { primary: true, name: "EARNINGSID" })
  earningsid: number;

  @Column("char", { name: "EARNINGSTYPE", length: 1 })
  earningstype: string;

  @Column("numeric", { name: "AMOUNT", precision: 18, scale: 2 })
  amount: number;
}
