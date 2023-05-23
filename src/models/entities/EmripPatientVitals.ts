import { Column, Entity, Index } from "typeorm";

@Index("PK_EMRIPPatientVitals", ["registrationId", "pin"], { unique: true })
@Entity("EMRIPPatientVitals", { schema: "dbo" })
export class EmripPatientVitals {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 10 })
  pin: string;

  @Column("int", { name: "Fallrisk", nullable: true })
  fallrisk: number | null;

  @Column("int", { name: "SensoryDeficit", nullable: true })
  sensoryDeficit: number | null;

  @Column("int", { name: "Sensorium", nullable: true })
  sensorium: number | null;

  @Column("int", { name: "LearnReadiness", nullable: true })
  learnReadiness: number | null;

  @Column("int", { name: "BestLearn", nullable: true })
  bestLearn: number | null;

  @Column("varchar", { name: "Comments", nullable: true, length: 500 })
  comments: string | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
