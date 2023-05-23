import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_DATEWISEITEMWAREHOUSEHDR",
  ["stockdate", "warecode", "itemid", "priceid"],
  { unique: true }
)
@Entity("DATEWISEITEMWAREHOUSEHDR", { schema: "dbo" })
export class Datewiseitemwarehousehdr {
  @Column("date", { primary: true, name: "STOCKDATE" })
  stockdate: Date;

  @Column("varchar", { primary: true, name: "WARECODE", length: 10 })
  warecode: string;

  @Column("numeric", { primary: true, name: "ITEMID", precision: 18, scale: 0 })
  itemid: number;

  @Column("numeric", {
    primary: true,
    name: "PRICEID",
    precision: 18,
    scale: 0,
  })
  priceid: number;

  @Column("int", { name: "REQUESTTYPE", default: () => "(0)" })
  requesttype: number;

  @Column("int", { name: "OPBALQTY", nullable: true })
  opbalqty: number | null;

  @Column("numeric", {
    name: "OPBALPRICE",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  opbalprice: number | null;

  @Column("numeric", {
    name: "OPBALAMOUNT",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  opbalamount: number | null;

  @Column("int", { name: "CLBALQTY" })
  clbalqty: number;

  @Column("numeric", { name: "CLBALPRICE", precision: 18, scale: 2 })
  clbalprice: number;

  @Column("numeric", { name: "CLBALAMOUNT", precision: 18, scale: 2 })
  clbalamount: number;

  @Column("int", { name: "TOTALRECEIPT" })
  totalreceipt: number;

  @Column("int", { name: "TOTALISSUES" })
  totalissues: number;

  @Column("datetime", { name: "CLBALDATE", nullable: true })
  clbaldate: Date | null;

  @Column("varchar", { name: "BINLOCATION", nullable: true, length: 100 })
  binlocation: string | null;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
