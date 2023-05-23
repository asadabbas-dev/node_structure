import { Column, Entity } from "typeorm";

@Entity("EMPSETTLEMENTDTL", { schema: "dbo" })
export class Empsettlementdtl {
  @Column("int", { name: "EMPID" })
  empid: number;

  @Column("int", { name: "GRATUITYID" })
  gratuityid: number;

  @Column("numeric", { name: "NOOFDAYS", precision: 18, scale: 2 })
  noofdays: number;

  @Column("numeric", { name: "ELGIBLEDAYS", precision: 18, scale: 2 })
  elgibledays: number;

  @Column("numeric", { name: "LOSSOFPAYDAYS", precision: 18, scale: 2 })
  lossofpaydays: number;

  @Column("varchar", { name: "DRCOSTCODE", nullable: true, length: 10 })
  drcostcode: string | null;

  @Column("varchar", { name: "CRCOSTCODE", nullable: true, length: 10 })
  crcostcode: string | null;

  @Column("varchar", { name: "DRACCOUNT", length: 10 })
  draccount: string;

  @Column("varchar", { name: "CRACCOUNT", length: 10 })
  craccount: string;

  @Column("numeric", { name: "AMOUNT", precision: 18, scale: 2 })
  amount: number;

  @Column("varchar", { name: "DRSUBLEDGER", nullable: true, length: 10 })
  drsubledger: string | null;

  @Column("varchar", { name: "CRSUBLEDGER", nullable: true, length: 10 })
  crsubledger: string | null;
}
