import { Column, Entity } from "typeorm";

@Entity("FINBUDGETCONFIG", { schema: "dbo" })
export class Finbudgetconfig {
  @Column("int", { name: "YearCode" })
  yearCode: number;

  @Column("varchar", { name: "CostCode", length: 20 })
  costCode: string;

  @Column("varchar", { name: "AccountCode", length: 20 })
  accountCode: string;

  @Column("numeric", { name: "JanD", precision: 18, scale: 2 })
  janD: number;

  @Column("numeric", { name: "JanC", precision: 18, scale: 2 })
  janC: number;

  @Column("numeric", { name: "FebD", precision: 18, scale: 2 })
  febD: number;

  @Column("numeric", { name: "FebC", precision: 18, scale: 2 })
  febC: number;

  @Column("numeric", { name: "MarD", precision: 18, scale: 2 })
  marD: number;

  @Column("numeric", { name: "MarC", precision: 18, scale: 2 })
  marC: number;

  @Column("numeric", { name: "AprD", precision: 18, scale: 2 })
  aprD: number;

  @Column("numeric", { name: "AprC", precision: 18, scale: 2 })
  aprC: number;

  @Column("numeric", { name: "MayD", precision: 18, scale: 2 })
  mayD: number;

  @Column("numeric", { name: "MayC", precision: 18, scale: 2 })
  mayC: number;

  @Column("numeric", { name: "JunD", precision: 18, scale: 2 })
  junD: number;

  @Column("numeric", { name: "JunC", precision: 18, scale: 2 })
  junC: number;

  @Column("numeric", { name: "JulD", precision: 18, scale: 2 })
  julD: number;

  @Column("numeric", { name: "JulC", precision: 18, scale: 2 })
  julC: number;

  @Column("numeric", { name: "AugD", precision: 18, scale: 2 })
  augD: number;

  @Column("numeric", { name: "AugC", precision: 18, scale: 2 })
  augC: number;

  @Column("numeric", { name: "SepD", precision: 18, scale: 2 })
  sepD: number;

  @Column("numeric", { name: "SepC", precision: 18, scale: 2 })
  sepC: number;

  @Column("numeric", { name: "OctD", precision: 18, scale: 2 })
  octD: number;

  @Column("numeric", { name: "OctC", precision: 18, scale: 2 })
  octC: number;

  @Column("numeric", { name: "NovD", precision: 18, scale: 2 })
  novD: number;

  @Column("numeric", { name: "NovC", precision: 18, scale: 2 })
  novC: number;

  @Column("numeric", { name: "DecD", precision: 18, scale: 2 })
  decD: number;

  @Column("numeric", { name: "DecC", precision: 18, scale: 2 })
  decC: number;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;
}
