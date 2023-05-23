import { Column, Entity } from "typeorm";

@Entity("VStockUpdate", { schema: "dbo" })
export class VStockUpdate {
  @Column("varchar", { name: "BinLocation", nullable: true, length: 50 })
  binLocation: string | null;

  @Column("varchar", { name: "WareCode", length: 50 })
  wareCode: string;

  @Column("int", { name: "BatchType", nullable: true })
  batchType: number | null;

  @Column("varchar", { name: "BatchNo", nullable: true, length: 50 })
  batchNo: string | null;

  @Column("date", { name: "BatchDate", nullable: true })
  batchDate: Date | null;

  @Column("date", { name: "ExpiryDate", nullable: true })
  expiryDate: Date | null;

  @Column("varchar", { name: "ItemCode", length: 50 })
  itemCode: string;

  @Column("varchar", { name: "ItemName", length: 500 })
  itemName: string;

  @Column("varchar", { name: "Pack", length: 50 })
  pack: string;

  @Column("int", { name: "Stock" })
  stock: number;

  @Column("numeric", { name: "CostPrice", precision: 18, scale: 2 })
  costPrice: number;

  @Column("numeric", { name: "TotalCost", precision: 18, scale: 2 })
  totalCost: number;

  @Column("numeric", { name: "SalePrice", precision: 18, scale: 2 })
  salePrice: number;

  @Column("numeric", {
    name: "itemid",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  itemid: number;

  @Column("numeric", {
    name: "priceid",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  priceid: number;

  @Column("varchar", { name: "StockAccount", nullable: true, length: 50 })
  stockAccount: string | null;

  @Column("varchar", { name: "SalesAccount", nullable: true, length: 50 })
  salesAccount: string | null;

  @Column("varchar", { name: "ConsumeAccount", nullable: true, length: 50 })
  consumeAccount: string | null;
}
