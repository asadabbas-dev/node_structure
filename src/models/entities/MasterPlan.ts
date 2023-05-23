import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_MasterPlan", ["planId"], { unique: true })
@Entity("MasterPlan", { schema: "dbo" })
export class MasterPlan {
  @PrimaryGeneratedColumn({
    type: "numeric",
    name: "PlanId",
    precision: 18,
    scale: 0,
  })
  planId: number;

  @Column("numeric", { name: "PartyId", precision: 18, scale: 0 })
  partyId: number;

  @Column("varchar", { name: "PlanCode", length: 50 })
  planCode: string;

  @Column("varchar", { name: "PlanName", length: 50 })
  planName: string;

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
