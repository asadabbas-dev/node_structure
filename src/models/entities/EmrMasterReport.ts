import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_EMRMasterReport", ["reportId"], { unique: true })
@Entity("EMRMasterReport", { schema: "dbo" })
export class EmrMasterReport {
  @PrimaryGeneratedColumn({ type: "int", name: "ReportId" })
  reportId: number;

  @Column("varchar", { name: "ReportTitle", length: 50 })
  reportTitle: string;

  @Column("int", { name: "ReportType", default: () => "(0)" })
  reportType: number;

  @Column("varchar", { name: "Result" })
  result: string;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
