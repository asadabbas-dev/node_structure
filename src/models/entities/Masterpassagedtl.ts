import { Column, Entity, Index } from "typeorm";

@Index("PK_MASTERPASSAGEDTL", ["passageid", "tickettypeid"], { unique: true })
@Entity("MASTERPASSAGEDTL", { schema: "dbo" })
export class Masterpassagedtl {
  @Column("int", { primary: true, name: "PASSAGEID" })
  passageid: number;

  @Column("int", { primary: true, name: "TICKETTYPEID" })
  tickettypeid: number;

  @Column("numeric", { name: "AMOUNT", precision: 18, scale: 2 })
  amount: number;
}
