import { Column, Entity, Index } from "typeorm";

@Index("PK_EMRPainAssessment", ["registrationId", "pin", "date"], {
  unique: true,
})
@Entity("EMRPainAssessment", { schema: "dbo" })
export class EmrPainAssessment {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 10 })
  pin: string;

  @Column("datetime", { primary: true, name: "Date" })
  date: Date;

  @Column("varchar", { name: "PainLocation", nullable: true, length: 50 })
  painLocation: string | null;

  @Column("int", { name: "PainQuality", nullable: true })
  painQuality: number | null;

  @Column("int", { name: "Duration", nullable: true })
  duration: number | null;

  @Column("int", { name: "DurationType", nullable: true })
  durationType: number | null;

  @Column("int", { name: "Onset", nullable: true })
  onset: number | null;

  @Column("int", { name: "Rhythm", nullable: true })
  rhythm: number | null;

  @Column("int", { name: "PainScale", nullable: true })
  painScale: number | null;

  @Column("varchar", { name: "PainIntensityReset", nullable: true, length: 50 })
  painIntensityReset: string | null;

  @Column("varchar", { name: "PainIntensityMove", nullable: true, length: 50 })
  painIntensityMove: string | null;

  @Column("int", { name: "Symptoms", nullable: true })
  symptoms: number | null;

  @Column("varchar", { name: "PharmMgt", nullable: true, length: 50 })
  pharmMgt: string | null;

  @Column("varchar", { name: "NonPharmMgt", nullable: true, length: 50 })
  nonPharmMgt: string | null;

  @Column("varchar", { name: "Comments", nullable: true, length: 50 })
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
