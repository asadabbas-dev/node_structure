import { Column, Entity } from "typeorm";

@Entity("MASTERLEAVERULESDTL", { schema: "dbo" })
export class Masterleaverulesdtl {
  @Column("int", { name: "RULECODE" })
  rulecode: number;

  @Column("int", { name: "LEAVECODE" })
  leavecode: number;

  @Column("int", { name: "ELIGIBLEDAYS" })
  eligibledays: number;

  @Column("int", { name: "TOTALDAYS" })
  totaldays: number;

  @Column("bit", { name: "DAYSACCUMULATE" })
  daysaccumulate: boolean;

  @Column("int", { name: "MAXACCUMULATE" })
  maxaccumulate: number;

  @Column("bit", { name: "ENCASH" })
  encash: boolean;

  @Column("bit", { name: "ESB" })
  esb: boolean;

  @Column("int", { name: "LEAVEGAP" })
  leavegap: number;

  @Column("char", { name: "AFFECTPAYCALC", nullable: true, length: 1 })
  affectpaycalc: string | null;

  @Column("int", { name: "EARNINGSID", nullable: true })
  earningsid: number | null;
}
