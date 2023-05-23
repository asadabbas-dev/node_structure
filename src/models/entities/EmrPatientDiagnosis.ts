import { Column, Entity, Index } from "typeorm";

@Index("PK_PatientDiagnosis", ["requestId", "diagnosisCode"], { unique: true })
@Entity("EMRPatientDiagnosis", { schema: "dbo" })
export class EmrPatientDiagnosis {
  @Column("numeric", {
    primary: true,
    name: "RequestId",
    precision: 18,
    scale: 0,
  })
  requestId: number;

  @Column("varchar", { primary: true, name: "DiagnosisCode", length: 20 })
  diagnosisCode: string;

  @Column("varchar", { name: "DiagnosisType", length: 20 })
  diagnosisType: string;

  @Column("int", { name: "EntryType" })
  entryType: number;

  @Column("numeric", {
    name: "AdmissionId",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  admissionId: number | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
