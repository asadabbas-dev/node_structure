import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_PURSTOCKADJUSTMENTDTL",
  ["adjustmentnumber", "itemid", "priceid", "batchno"],
  { unique: true }
)
@Entity("PURSTOCKADJUSTMENTDTL", { schema: "dbo" })
export class Purstockadjustmentdtl {
  @Column("varchar", { primary: true, name: "ADJUSTMENTNUMBER", length: 15 })
  adjustmentnumber: string;

  @Column("numeric", { primary: true, name: "ITEMID", precision: 18, scale: 0 })
  itemid: number;

  @Column("int", { primary: true, name: "PRICEID" })
  priceid: number;

  @Column("varchar", { primary: true, name: "BATCHNO", length: 50 })
  batchno: string;

  @Column("date", { name: "BATCHDATE", nullable: true })
  batchdate: Date | null;

  @Column("date", { name: "BATCHEXPIRY", nullable: true })
  batchexpiry: Date | null;

  @Column("int", { name: "REQUESTQTY" })
  requestqty: number;

  @Column("numeric", { name: "PRICE", precision: 18, scale: 2 })
  price: number;

  @Column("numeric", { name: "AMOUNT", precision: 18, scale: 2 })
  amount: number;

  @Column("varchar", { name: "ADJUSTMENTTYPE", length: 50 })
  adjustmenttype: string;

  @Column("varchar", { name: "ACCOUNTCODE", length: 15 })
  accountcode: string;

  @Column("varchar", { name: "DOCTYPE", length: 5 })
  doctype: string;

  @Column("varchar", { name: "SUBTYPE", length: 5 })
  subtype: string;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
