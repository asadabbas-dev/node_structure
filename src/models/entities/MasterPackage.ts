import { Column, Entity, Index } from "typeorm";

@Index("PK_MasterPackage", ["packageId", "chargeId"], { unique: true })
@Entity("MasterPackage", { schema: "dbo" })
export class MasterPackage {
  @Column("int", { primary: true, name: "PackageId" })
  packageId: number;

  @Column("int", { primary: true, name: "ChargeId" })
  chargeId: number;

  @Column("int", { name: "Quantity" })
  quantity: number;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
