import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_LEAVESETTLEMENTDTL",
  ["transid", "startdate", "enddate", "earndedid", "earndedtype"],
  { unique: true }
)
@Entity("LEAVESETTLEMENTDTL", { schema: "dbo" })
export class Leavesettlementdtl {
  @Column("int", { primary: true, name: "TRANSID" })
  transid: number;

  @Column("date", { primary: true, name: "STARTDATE" })
  startdate: Date;

  @Column("date", { primary: true, name: "ENDDATE" })
  enddate: Date;

  @Column("int", { primary: true, name: "EARNDEDID" })
  earndedid: number;

  @Column("char", { primary: true, name: "EARNDEDTYPE", length: 1 })
  earndedtype: string;

  @Column("numeric", { name: "AMOUNT", precision: 18, scale: 2 })
  amount: number;
}
