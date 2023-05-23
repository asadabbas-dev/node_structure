import { Column, Entity, Index } from "typeorm";

@Index("PK__OTCOMPEN__B6AB22EEDFF3B577", ["compensid", "earningsid"], {
  unique: true,
})
@Entity("OTCOMPENSATIONDTL", { schema: "dbo" })
export class Otcompensationdtl {
  @Column("int", { primary: true, name: "COMPENSID" })
  compensid: number;

  @Column("int", { primary: true, name: "EARNINGSID" })
  earningsid: number;
}
