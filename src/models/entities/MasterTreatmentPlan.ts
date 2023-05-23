import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_MasterTreatmentPlan", ["treatmentId"], { unique: true })
@Entity("MasterTreatmentPlan", { schema: "dbo" })
export class MasterTreatmentPlan {
  @PrimaryGeneratedColumn({
    type: "numeric",
    name: "TreatmentId",
    precision: 18,
    scale: 0,
  })
  treatmentId: number;

  @Column("varchar", { name: "Treatment", length: 500 })
  treatment: string;

  @Column("nvarchar", { name: "TreatmentLatin", length: 200 })
  treatmentLatin: string;

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
