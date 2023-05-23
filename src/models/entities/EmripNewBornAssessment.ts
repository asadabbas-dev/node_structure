import { Column, Entity, Index } from "typeorm";

@Index("PK_EMRIPNewBornAssessment", ["registrationId", "pin"], { unique: true })
@Entity("EMRIPNewBornAssessment", { schema: "dbo" })
export class EmripNewBornAssessment {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 10 })
  pin: string;

  @Column("date", { name: "DOB", nullable: true })
  dob: Date | null;

  @Column("varchar", { name: "TOB", nullable: true, length: 5 })
  tob: string | null;

  @Column("int", { name: "PainScore", nullable: true })
  painScore: number | null;

  @Column("int", { name: "DeliveryType", nullable: true })
  deliveryType: number | null;

  @Column("int", { name: "Temperature", nullable: true })
  temperature: number | null;

  @Column("int", { name: "HeartRate", nullable: true })
  heartRate: number | null;

  @Column("int", { name: "RespiratoryRate", nullable: true })
  respiratoryRate: number | null;

  @Column("int", { name: "SPO2", nullable: true })
  spo2: number | null;

  @Column("bit", { name: "IsVitaminInjectionGiven", nullable: true })
  isVitaminInjectionGiven: boolean | null;

  @Column("varchar", { name: "VitaminReason", nullable: true, length: 100 })
  vitaminReason: string | null;

  @Column("int", { name: "Weight", nullable: true })
  weight: number | null;

  @Column("int", { name: "Length", nullable: true })
  length: number | null;

  @Column("int", { name: "HeadCircumference", nullable: true })
  headCircumference: number | null;

  @Column("smallint", { name: "FeedingMethod", nullable: true })
  feedingMethod: number | null;

  @Column("varchar", { name: "MotherPIN", nullable: true, length: 10 })
  motherPin: string | null;

  @Column("smallint", { name: "Gestation", nullable: true })
  gestation: number | null;

  @Column("int", { name: "PreTermWeeks", nullable: true })
  preTermWeeks: number | null;

  @Column("smallint", { name: "DeterminedBy", nullable: true })
  determinedBy: number | null;

  @Column("varchar", { name: "AntenatalFindings", nullable: true, length: 500 })
  antenatalFindings: string | null;

  @Column("varchar", {
    name: "AntenatalRiskFactors",
    nullable: true,
    length: 500,
  })
  antenatalRiskFactors: string | null;

  @Column("varchar", { name: "BabyBloodType", nullable: true, length: 20 })
  babyBloodType: string | null;

  @Column("varchar", { name: "MotherBloodType", nullable: true, length: 20 })
  motherBloodType: string | null;

  @Column("varchar", { name: "CoombsTest", nullable: true, length: 100 })
  coombsTest: string | null;

  @Column("bit", { name: "MotherBabyBondingYN", nullable: true })
  motherBabyBondingYn: boolean | null;

  @Column("varchar", { name: "BondingReason", nullable: true, length: 200 })
  bondingReason: string | null;

  @Column("varchar", { name: "Comments", nullable: true, length: 500 })
  comments: string | null;

  @Column("varchar", { name: "NurseId", nullable: true, length: 10 })
  nurseId: string | null;

  @Column("varchar", {
    name: "PregnancyComplication",
    nullable: true,
    length: 500,
  })
  pregnancyComplication: string | null;

  @Column("varchar", {
    name: "DeliveryComplication",
    nullable: true,
    length: 500,
  })
  deliveryComplication: string | null;

  @Column("varchar", { name: "Cry", nullable: true, length: 20 })
  cry: string | null;

  @Column("varchar", { name: "Tone", nullable: true, length: 20 })
  tone: string | null;

  @Column("varchar", { name: "Activity", nullable: true, length: 20 })
  activity: string | null;

  @Column("varchar", { name: "Color", nullable: true, length: 20 })
  color: string | null;

  @Column("int", { name: "ApgarScore1", nullable: true })
  apgarScore1: number | null;

  @Column("int", { name: "ApgarScore5", nullable: true })
  apgarScore5: number | null;

  @Column("bit", { name: "RoomResuscitationYN", nullable: true })
  roomResuscitationYn: boolean | null;

  @Column("varchar", { name: "RoomDetails", nullable: true, length: 200 })
  roomDetails: string | null;

  @Column("varchar", {
    name: "CongenitalAnomalies",
    nullable: true,
    length: 500,
  })
  congenitalAnomalies: string | null;

  @Column("smallint", { name: "FemoralPulse", nullable: true })
  femoralPulse: number | null;

  @Column("varchar", { name: "FemoralDetails", nullable: true, length: 200 })
  femoralDetails: string | null;

  @Column("varchar", { name: "Treatment", nullable: true, length: 500 })
  treatment: string | null;

  @Column("varchar", { name: "Followup", nullable: true, length: 500 })
  followup: string | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
