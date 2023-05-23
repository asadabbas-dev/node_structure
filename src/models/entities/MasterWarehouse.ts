import { Column, Entity, Index } from "typeorm";

@Index("PK_MasterWarehouse", ["wareCode"], { unique: true })
@Entity("MasterWarehouse", { schema: "dbo" })
export class MasterWarehouse {
  @Column("varchar", { primary: true, name: "WareCode", length: 10 })
  wareCode: string;

  @Column("varchar", { name: "WareDesc", length: 100 })
  wareDesc: string;

  @Column("varchar", { name: "CostCode", length: 10 })
  costCode: string;

  @Column("varchar", { name: "AccountCode", length: 10 })
  accountCode: string;

  @Column("bit", { name: "IsActive", default: () => "(0)" })
  isActive: boolean;
}
