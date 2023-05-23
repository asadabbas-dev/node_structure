import { Column, Entity, Index } from "typeorm";

@Index("PK_EMRMasterComplaints", ["problemId"], { unique: true })
@Entity("EMRMasterComplaints", { schema: "dbo" })
export class EmrMasterComplaints {
  @Column("numeric", {
    primary: true,
    name: "ProblemId",
    precision: 20,
    scale: 0,
  })
  problemId: number;

  @Column("varchar", { name: "Problem", length: 500 })
  problem: string;

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
