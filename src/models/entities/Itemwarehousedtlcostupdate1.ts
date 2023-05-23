import { Column, Entity } from "typeorm";

@Entity("ITEMWAREHOUSEDTLCOSTUPDATE1", { schema: "dbo" })
export class Itemwarehousedtlcostupdate1 {
  @Column("numeric", {
    name: "COSTPRICE",
    nullable: true,
    precision: 38,
    scale: 6,
  })
  costprice: number | null;

  @Column("varchar", { name: "WARECODE", length: 10 })
  warecode: string;

  @Column("numeric", { name: "ITEMID", precision: 18, scale: 0 })
  itemid: number;

  @Column("numeric", { name: "PRICEID", precision: 18, scale: 0 })
  priceid: number;

  @Column("varchar", { name: "BATCHNO", length: 50 })
  batchno: string;

  @Column("date", { name: "BATCHDATE", nullable: true })
  batchdate: Date | null;

  @Column("date", { name: "BATCHEXPIRY", nullable: true })
  batchexpiry: Date | null;

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

  @Column("int", { name: "STOCKQTY" })
  stockqty: number;

  @Column("int", { name: "CLBALQTY" })
  clbalqty: number;

  @Column("numeric", { name: "CLBALPRICE", precision: 18, scale: 2 })
  clbalprice: number;

  @Column("numeric", {
    name: "CLBALAMOUNT",
    nullable: true,
    precision: 29,
    scale: 2,
  })
  clbalamount: number | null;

  @Column("int", { name: "TOTALRECEIPT" })
  totalreceipt: number;

  @Column("int", { name: "TOTALISSUES" })
  totalissues: number;

  @Column("varchar", { name: "BARCODE", nullable: true, length: 50 })
  barcode: string | null;

  @Column("varchar", { name: "LASTRECEIPTNO", nullable: true, length: 15 })
  lastreceiptno: string | null;

  @Column("datetime", { name: "LASTRECEIPTDATE", nullable: true })
  lastreceiptdate: Date | null;

  @Column("int", { name: "REQUESTTYPE" })
  requesttype: number;

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
