import { Column, Entity } from "typeorm";

@Entity("VPStockUpdate", { schema: "dbo" })
export class VpStockUpdate {
  @Column("varchar", { name: "WareCode", length: 50 })
  wareCode: string;

  @Column("varchar", { name: "ItemCode", length: 50 })
  itemCode: string;

  @Column("varchar", { name: "ItemName", length: 500 })
  itemName: string;

  @Column("int", { name: "PackSize" })
  packSize: number;

  @Column("varchar", { name: "Supplier", length: 200 })
  supplier: string;

  @Column("varchar", { name: "FormCode", length: 50 })
  formCode: string;

  @Column("varchar", { name: "Manufacture", length: 200 })
  manufacture: string;

  @Column("varchar", { name: "Pack", length: 50 })
  pack: string;

  @Column("int", { name: "stock" })
  stock: number;

  @Column("varchar", { name: "Batchno", length: 50 })
  batchno: string;

  @Column("date", { name: "BatchDate" })
  batchDate: Date;

  @Column("date", { name: "BatchExpiry" })
  batchExpiry: Date;

  @Column("numeric", { name: "CostPrice", precision: 18, scale: 2 })
  costPrice: number;

  @Column("numeric", { name: "SalePrice", precision: 18, scale: 2 })
  salePrice: number;

  @Column("numeric", { name: "Total", precision: 18, scale: 2 })
  total: number;

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
}
