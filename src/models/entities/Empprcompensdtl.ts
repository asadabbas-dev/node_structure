import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_EMPPRCOMPENSDTL",
  ["transid", "allowanceid", "allowancetype", "isnew"],
  { unique: true }
)
@Entity("EMPPRCOMPENSDTL", { schema: "dbo" })
export class Empprcompensdtl {
  @Column("int", { primary: true, name: "TRANSID" })
  transid: number;

  @Column("int", { primary: true, name: "ALLOWANCEID" })
  allowanceid: number;

  @Column("bit", { primary: true, name: "ALLOWANCETYPE" })
  allowancetype: boolean;

  @Column("numeric", { name: "AMOUNT", precision: 18, scale: 2 })
  amount: number;

  @Column("bit", { name: "PAYCALCFLAG" })
  paycalcflag: boolean;

  @Column("bit", { primary: true, name: "ISNEW" })
  isnew: boolean;
}
