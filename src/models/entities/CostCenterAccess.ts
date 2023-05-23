import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_WarehouseAccess", ["userId", "costCode"], { unique: true })
@Entity("CostCenterAccess", { schema: "dbo" })
export class CostCenterAccess {
  @PrimaryGeneratedColumn({
    type: "numeric",
    name: "AccessId",
    precision: 18,
    scale: 0,
  })
  accessId: number;

  @Column("varchar", { primary: true, name: "UserId", length: 20 })
  userId: string;

  @Column("varchar", { primary: true, name: "CostCode", length: 20 })
  costCode: string;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreateDate" })
  createDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
