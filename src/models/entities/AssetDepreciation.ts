import { Column, Entity, Index } from "typeorm";

@Index("PK_AssetDepreciation_1", ["year", "month", "docnumber", "assetId"], {
  unique: true,
})
@Entity("AssetDepreciation", { schema: "dbo" })
export class AssetDepreciation {
  @Column("int", { primary: true, name: "Year" })
  year: number;

  @Column("int", { primary: true, name: "Month" })
  month: number;

  @Column("varchar", { primary: true, name: "Docnumber", length: 20 })
  docnumber: string;

  @Column("numeric", {
    primary: true,
    name: "AssetId",
    precision: 18,
    scale: 0,
  })
  assetId: number;

  @Column("numeric", { name: "DepreciationAmount", precision: 18, scale: 2 })
  depreciationAmount: number;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
