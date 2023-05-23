import { Column, Entity } from "typeorm";

@Entity("DischargeSummary", { schema: "dbo" })
export class DischargeSummary {
  @Column("numeric", { name: "RegistrationId", precision: 18, scale: 0 })
  registrationId: number;

  @Column("datetime", { name: "AdmissionDate" })
  admissionDate: Date;

  @Column("datetime", { name: "DischargeDate", nullable: true })
  dischargeDate: Date | null;

  @Column("varchar", { name: "DoctorCode", length: 10 })
  doctorCode: string;

  @Column("varchar", { name: "Diagnosis", nullable: true })
  diagnosis: string | null;

  @Column("varchar", { name: "AdmissionReason", nullable: true })
  admissionReason: string | null;

  @Column("varchar", { name: "ProceduresPerfomed", nullable: true })
  proceduresPerfomed: string | null;

  @Column("varchar", { name: "SignificantFindings", nullable: true })
  significantFindings: string | null;

  @Column("varchar", { name: "HospitalCourse", nullable: true })
  hospitalCourse: string | null;

  @Column("varchar", { name: "DischargeCondition", nullable: true })
  dischargeCondition: string | null;

  @Column("varchar", { name: "Medications", nullable: true })
  medications: string | null;

  @Column("varchar", { name: "Followup", nullable: true })
  followup: string | null;

  @Column("varchar", { name: "PreparedBy", nullable: true, length: 50 })
  preparedBy: string | null;

  @Column("varchar", { name: "TranscribedBy", nullable: true, length: 50 })
  transcribedBy: string | null;

  @Column("varchar", { name: "RoomNo", nullable: true, length: 50 })
  roomNo: string | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifiedBy", length: 50 })
  modifiedBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
