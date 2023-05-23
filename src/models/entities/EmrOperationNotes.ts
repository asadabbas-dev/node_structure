import { Column, Entity, Index } from "typeorm";

@Index("PK_EMROperationNotes_1", ["registrationId", "pin", "reportTitle"], {
  unique: true,
})
@Entity("EMROperationNotes", { schema: "dbo" })
export class EmrOperationNotes {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 15 })
  pin: string;

  @Column("varchar", { primary: true, name: "ReportTitle", length: 50 })
  reportTitle: string;

  @Column("varchar", { name: "PreDiagnosis", length: 50 })
  preDiagnosis: string;

  @Column("varchar", { name: "Position", length: 50 })
  position: string;

  @Column("varchar", { name: "ProcedureType", length: 50 })
  procedureType: string;

  @Column("varchar", { name: "AnesthesiaType", length: 50 })
  anesthesiaType: string;

  @Column("varchar", { name: "SurgeryIndication", length: 100 })
  surgeryIndication: string;

  @Column("varchar", { name: "Procedures", length: 500 })
  procedures: string;

  @Column("varchar", { name: "Surgeon", length: 50 })
  surgeon: string;

  @Column("varchar", { name: "Technician", length: 50 })
  technician: string;

  @Column("varchar", { name: "Anathetist", length: 50 })
  anathetist: string;

  @Column("varchar", { name: "Implants", length: 50 })
  implants: string;

  @Column("time", { name: "StartTime" })
  startTime: Date;

  @Column("time", { name: "EndTime" })
  endTime: Date;

  @Column("varchar", { name: "BloodLoss", length: 50 })
  bloodLoss: string;

  @Column("varchar", { name: "Specimen", length: 50 })
  specimen: string;

  @Column("varchar", { name: "Findings", length: 500 })
  findings: string;

  @Column("varchar", { name: "PostDiagnisis", length: 50 })
  postDiagnisis: string;

  @Column("varchar", { name: "Instructions", length: 500 })
  instructions: string;

  @Column("varchar", { name: "DischargeCondition", length: 50 })
  dischargeCondition: string;

  @Column("varchar", { name: "Disposition", length: 50 })
  disposition: string;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
