import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_UserReportConfig", ["reportId"], { unique: true })
@Entity("UserReportConfig", { schema: "dbo" })
export class UserReportConfig {
  @PrimaryGeneratedColumn({ type: "int", name: "ReportId" })
  reportId: number;

  @Column("varchar", { name: "ReportName", length: 50 })
  reportName: string;

  @Column("varchar", { name: "UserName", nullable: true, length: 50 })
  userName: string | null;

  @Column("varchar", { name: "FileName", length: 50 })
  fileName: string;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
