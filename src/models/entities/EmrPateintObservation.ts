import { Column, Entity } from "typeorm";

@Entity("EMRPateintObservation", { schema: "dbo" })
export class EmrPateintObservation {
  @Column("numeric", { name: "RegistrationId", precision: 18, scale: 0 })
  registrationId: number;

  @Column("varchar", { name: "PIN", length: 10 })
  pin: string;

  @Column("datetime", { name: "VitalDate" })
  vitalDate: Date;

  @Column("varchar", { name: "BloodPressure", nullable: true, length: 8 })
  bloodPressure: string | null;

  @Column("int", { name: "PulseRate", nullable: true })
  pulseRate: number | null;

  @Column("int", { name: "Temperature", nullable: true })
  temperature: number | null;

  @Column("int", { name: "PainScore", nullable: true })
  painScore: number | null;

  @Column("int", { name: "RespiratoryRate", nullable: true })
  respiratoryRate: number | null;

  @Column("int", { name: "SPO2", nullable: true })
  spo2: number | null;

  @Column("varchar", { name: "Remarks", nullable: true, length: 200 })
  remarks: string | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
