import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_STOCKTRANSACTION",
  [
    "requesttype",
    "requesttypecode",
    "requestnumber",
    "receiptdate",
    "itemid",
    "priceid",
    "batchno",
  ],
  { unique: true }
)
@Entity("STOCKTRANSACTION", { schema: "dbo" })
export class Stocktransaction {
  @Column("int", { primary: true, name: "REQUESTTYPE" })
  requesttype: number;

  @Column("varchar", { primary: true, name: "REQUESTTYPECODE", length: 5 })
  requesttypecode: string;

  @Column("varchar", { primary: true, name: "REQUESTNUMBER", length: 15 })
  requestnumber: string;

  @Column("date", { primary: true, name: "RECEIPTDATE" })
  receiptdate: Date;

  @Column("numeric", { primary: true, name: "ITEMID", precision: 18, scale: 0 })
  itemid: number;

  @Column("numeric", {
    primary: true,
    name: "PRICEID",
    precision: 18,
    scale: 0,
  })
  priceid: number;

  @Column("int", { name: "QUANTITY" })
  quantity: number;

  @Column("int", { name: "RETURNQTY", default: () => "(0)" })
  returnqty: number;

  @Column("numeric", { name: "COSTPRICE", precision: 18, scale: 2 })
  costprice: number;

  @Column("numeric", {
    name: "TOTALAMOUNT",
    nullable: true,
    precision: 29,
    scale: 2,
  })
  totalamount: number | null;

  @Column("varchar", { primary: true, name: "BATCHNO", length: 50 })
  batchno: string;

  @Column("date", { name: "BATCHDATE", nullable: true })
  batchdate: Date | null;

  @Column("date", { name: "BATCHEXPIRY", nullable: true })
  batchexpiry: Date | null;

  @Column("varchar", { name: "COSTCODE", length: 10 })
  costcode: string;

  @Column("varchar", { name: "WARECODE", nullable: true, length: 10 })
  warecode: string | null;

  @Column("varchar", { name: "FROMWARECODE", nullable: true, length: 10 })
  fromwarecode: string | null;

  @Column("varchar", { name: "FROMCOSTCODE", nullable: true, length: 10 })
  fromcostcode: string | null;

  @Column("varchar", { name: "SUPPLIER", nullable: true, length: 10 })
  supplier: string | null;

  @Column("varchar", { name: "REFNUMBER", nullable: true, length: 15 })
  refnumber: string | null;

  @Column("date", { name: "REFDATE", nullable: true })
  refdate: Date | null;

  @Column("varchar", { name: "INVOICENO", nullable: true, length: 25 })
  invoiceno: string | null;

  @Column("date", { name: "INVOICEDATE", nullable: true })
  invoicedate: Date | null;

  @Column("varchar", { name: "FINANCETYPECODE", length: 5 })
  financetypecode: string;

  @Column("varchar", { name: "FINANCEDOCTYPE", length: 5 })
  financedoctype: string;

  @Column("int", { name: "REQQTY", default: () => "(0)" })
  reqqty: number;

  @Column("int", { name: "TRANSACTIONTYPE", default: () => "(0)" })
  transactiontype: number;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;
}
