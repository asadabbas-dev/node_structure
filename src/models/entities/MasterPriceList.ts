import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_MasterPriceList", ["priceId"], { unique: true })
@Entity("MasterPriceList", { schema: "dbo" })
export class MasterPriceList {
  @PrimaryGeneratedColumn({ type: "int", name: "PriceId" })
  priceId: number;

  @Column("varchar", { name: "PriceCode", length: 50 })
  priceCode: string;

  @Column("varchar", { name: "PriceName", length: 150 })
  priceName: string;

  @Column("bit", { name: "IsActive", default: () => "(0)" })
  isActive: boolean;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
