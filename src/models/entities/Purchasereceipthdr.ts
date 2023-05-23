import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_PURCHASERECEIPTHDR",
  ["requesttype", "requesttypecode", "requestno"],
  { unique: true }
)
@Entity("PURCHASERECEIPTHDR", { schema: "dbo" })
export class Purchasereceipthdr {
  @Column("int", { primary: true, name: "REQUESTTYPE" })
  requesttype: number;

  @Column("varchar", { primary: true, name: "REQUESTTYPECODE", length: 5 })
  requesttypecode: string;

  @Column("numeric", {
    primary: true,
    name: "REQUESTNO",
    precision: 18,
    scale: 0,
  })
  requestno: number;

  @Column("varchar", { name: "REQUESTNUMBER", nullable: true, length: 12 })
  requestnumber: string | null;

  @Column("date", { name: "RECEIPTDATE" })
  receiptdate: Date;

  @Column("varchar", { name: "INVOICENO", length: 50 })
  invoiceno: string;

  @Column("date", { name: "INVOICEDATE" })
  invoicedate: Date;

  @Column("varchar", { name: "SUPPLIER", length: 10 })
  supplier: string;

  @Column("varchar", { name: "COSTCENTER", length: 10 })
  costcenter: string;

  @Column("varchar", { name: "WARECODE", length: 10 })
  warecode: string;

  @Column("numeric", { name: "TOTALAMOUNT", precision: 18, scale: 2 })
  totalamount: number;

  @Column("varchar", { name: "PONUMBER", nullable: true, length: 12 })
  ponumber: string | null;

  @Column("date", { name: "PODATE", nullable: true })
  podate: Date | null;

  @Column("bit", { name: "ISACTIVE" })
  isactive: boolean;

  @Column("varchar", { name: "REMARKS", nullable: true, length: 100 })
  remarks: string | null;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
