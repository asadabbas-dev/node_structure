import { Column, Entity, Index } from "typeorm";

@Index("PK_FINOPENPERIOD", ["yearcode", "monthcode"], { unique: true })
@Entity("FINOPENPERIOD", { schema: "dbo" })
export class Finopenperiod {
  @Column("int", { primary: true, name: "YEARCODE" })
  yearcode: number;

  @Column("varchar", { primary: true, name: "MONTHCODE", length: 50 })
  monthcode: string;

  @Column("bit", { name: "CLOSED" })
  closed: boolean;

  @Column("date", { name: "CLOSINGDATE", nullable: true })
  closingdate: Date | null;
}
