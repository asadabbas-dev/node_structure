import { Column, Entity, Index } from "typeorm";

@Index("PK_Table", ["rulecode", "leavecode", "earningsid"], { unique: true })
@Entity("LEAVERULEEARNINGS", { schema: "dbo" })
export class Leaveruleearnings {
  @Column("int", { primary: true, name: "RULECODE" })
  rulecode: number;

  @Column("int", { primary: true, name: "LEAVECODE" })
  leavecode: number;

  @Column("int", { primary: true, name: "EARNINGSID" })
  earningsid: number;
}
