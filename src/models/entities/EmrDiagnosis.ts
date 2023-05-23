import { Column, Entity, Index } from "typeorm";

@Index("PK_EMRDiagnosis", ["registrationId", "diagnosisCode"], { unique: true })
@Entity("EMRDiagnosis", { schema: "dbo" })
export class EmrDiagnosis {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "DiagnosisCode", length: 20 })
  diagnosisCode: string;

  @Column("varchar", { name: "DiagnosisType", length: 20 })
  diagnosisType: string;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
