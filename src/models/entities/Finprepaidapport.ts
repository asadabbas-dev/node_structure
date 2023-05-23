import { Column, Entity, Index } from "typeorm";

@Index("PK_FINPREPAIDAPPORT", ["prepaidid", "accountcode", "costcode"], {
  unique: true,
})
@Entity("FINPREPAIDAPPORT", { schema: "dbo" })
export class Finprepaidapport {
  @Column("int", { primary: true, name: "PREPAIDID" })
  prepaidid: number;

  @Column("varchar", { primary: true, name: "ACCOUNTCODE", length: 15 })
  accountcode: string;

  @Column("varchar", { primary: true, name: "COSTCODE", length: 15 })
  costcode: string;

  @Column("numeric", { name: "PERCENTAGE", precision: 18, scale: 2 })
  percentage: number;

  @Column("numeric", {
    name: "AMOUNT",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  amount: number | null;

  @Column("numeric", {
    name: "FAMOUNT",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  famount: number | null;
}
