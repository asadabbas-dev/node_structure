import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_EMRMedicalReport", ["reportId"], { unique: true })
@Entity("EMRMedicalReport", { schema: "dbo" })
export class EmrMedicalReport {
  @PrimaryGeneratedColumn({ type: "int", name: "ReportId" })
  reportId: number;

  @Column("numeric", { name: "RegistrationId", precision: 18, scale: 0 })
  registrationId: number;

  @Column("varchar", { name: "PIN", length: 15 })
  pin: string;

  @Column("varchar", { name: "ReportTitle", length: 50 })
  reportTitle: string;

  @Column("varchar", { name: "DoctorCode", length: 10 })
  doctorCode: string;

  @Column("date", { name: "ReportDate" })
  reportDate: Date;

  @Column("varchar", { name: "ReportUser", nullable: true, length: 10 })
  reportUser: string | null;

  @Column("varchar", { name: "Result" })
  result: string;

  @Column("varchar", { name: "ApprovedBy", nullable: true, length: 10 })
  approvedBy: string | null;

  @Column("datetime", { name: "ApprovedDate", nullable: true })
  approvedDate: Date | null;

  @Column("bit", { name: "DoctorApproval", default: () => "(0)" })
  doctorApproval: boolean;

  @Column("varchar", {
    name: "DoctorAction",
    length: 50,
    default: () => "'No action'",
  })
  doctorAction: string;

  @Column("bit", { name: "ActionTaken", default: () => "(0)" })
  actionTaken: boolean;

  @Column("varchar", { name: "Remarks", nullable: true, length: 500 })
  remarks: string | null;

  @Column("int", { name: "ReportType", default: () => "(0)" })
  reportType: number;

  @Column("bit", { name: "IsCertificate", default: () => "(0)" })
  isCertificate: boolean;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
