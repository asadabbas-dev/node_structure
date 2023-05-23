import { Column, Entity, Index } from "typeorm";

@Index("PK_SalesReturn_1", ["salesReturnId", "inernalBillid"], { unique: true })
@Entity("SalesReturn", { schema: "dbo" })
export class SalesReturn {
  @Column("numeric", {
    primary: true,
    name: "SalesReturnId",
    precision: 18,
    scale: 0,
  })
  salesReturnId: number;

  @Column("numeric", {
    primary: true,
    name: "InernalBillid",
    precision: 18,
    scale: 0,
  })
  inernalBillid: number;

  @Column("varchar", { name: "BillNumber", length: 50 })
  billNumber: string;

  @Column("date", { name: "ReturnDate" })
  returnDate: Date;

  @Column("numeric", { name: "ChargeId", precision: 18, scale: 0 })
  chargeId: number;

  @Column("int", { name: "Quantity" })
  quantity: number;

  @Column("numeric", { name: "Price", precision: 18, scale: 2 })
  price: number;

  @Column("numeric", { name: "Total", precision: 18, scale: 2 })
  total: number;

  @Column("numeric", { name: "CostPrice", precision: 18, scale: 2 })
  costPrice: number;

  @Column("varchar", { name: "WarehouseCode", nullable: true, length: 10 })
  warehouseCode: string | null;

  @Column("varchar", { name: "BarCode", nullable: true, length: 50 })
  barCode: string | null;

  @Column("varchar", { name: "BatchNumber", nullable: true, length: 20 })
  batchNumber: string | null;

  @Column("date", { name: "BatchDate", nullable: true })
  batchDate: Date | null;

  @Column("date", { name: "BatchExpiry", nullable: true })
  batchExpiry: Date | null;

  @Column("varchar", { name: "Commgrup", nullable: true, length: 10 })
  commgrup: string | null;

  @Column("varchar", { name: "HuomCode", nullable: true, length: 10 })
  huomCode: string | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
