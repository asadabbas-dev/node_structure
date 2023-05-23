import { Column, Entity, Index } from "typeorm";

@Index("PK__tmp_ms_x__75A1854AA4B0875A", ["earningsid", "transno"], {
  unique: true,
})
@Entity("VARIABLETRANSDTL", { schema: "dbo" })
export class Variabletransdtl {
  @Column("int", { primary: true, name: "TRANSNO" })
  transno: number;

  @Column("int", { primary: true, name: "EARNINGSID" })
  earningsid: number;

  @Column("char", { name: "EARNINGSTYPE", length: 1 })
  earningstype: string;

  @Column("bit", { name: "ISOVERTIME" })
  isovertime: boolean;

  @Column("numeric", { name: "OTHOURS", precision: 8, scale: 2 })
  othours: number;

  @Column("numeric", { name: "AMOUNT", precision: 18, scale: 2 })
  amount: number;
}
