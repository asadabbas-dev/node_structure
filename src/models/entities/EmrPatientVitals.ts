import { Column, Entity, Index } from "typeorm";

@Index("PK_EMRPatientVitals", ["registrationId"], { unique: true })
@Entity("EMRPatientVitals", { schema: "dbo" })
export class EmrPatientVitals {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { name: "PIN", length: 10 })
  pin: string;

  @Column("numeric", {
    name: "PulseRate",
    nullable: true,
    precision: 18,
    scale: 1,
  })
  pulseRate: number | null;

  @Column("varchar", { name: "BloodPressure", nullable: true, length: 8 })
  bloodPressure: string | null;

  @Column("numeric", {
    name: "Temperature",
    nullable: true,
    precision: 18,
    scale: 1,
  })
  temperature: number | null;

  @Column("numeric", {
    name: "Height",
    nullable: true,
    precision: 18,
    scale: 1,
  })
  height: number | null;

  @Column("numeric", {
    name: "Weight",
    nullable: true,
    precision: 18,
    scale: 1,
  })
  weight: number | null;

  @Column("int", { name: "PainScore", nullable: true })
  painScore: number | null;

  @Column("int", { name: "BMI", nullable: true })
  bmi: number | null;

  @Column("numeric", {
    name: "RespiratoryRate",
    nullable: true,
    precision: 18,
    scale: 1,
  })
  respiratoryRate: number | null;

  @Column("numeric", {
    name: "HeadCircumference",
    nullable: true,
    precision: 18,
    scale: 1,
  })
  headCircumference: number | null;

  @Column("numeric", { name: "SPO2", nullable: true, precision: 18, scale: 1 })
  spo2: number | null;

  @Column("numeric", {
    name: "WaistCircumference",
    nullable: true,
    precision: 18,
    scale: 1,
  })
  waistCircumference: number | null;

  @Column("int", { name: "WeightType", nullable: true })
  weightType: number | null;

  @Column("int", { name: "WeightTypeKgs", nullable: true })
  weightTypeKgs: number | null;

  @Column("int", { name: "WeightLGPeriod", nullable: true })
  weightLgPeriod: number | null;

  @Column("bit", { name: "IsPregnant", nullable: true })
  isPregnant: boolean | null;

  @Column("date", { name: "LMPDate", nullable: true })
  lmpDate: Date | null;

  @Column("int", { name: "Appetite", nullable: true })
  appetite: number | null;

  @Column("int", { name: "Diet", nullable: true })
  diet: number | null;

  @Column("int", { name: "Mood", nullable: true })
  mood: number | null;

  @Column("int", { name: "Functional", nullable: true })
  functional: number | null;

  @Column("int", { name: "SupportSystem", nullable: true })
  supportSystem: number | null;

  @Column("varchar", { name: "OtherSupporter", nullable: true, length: 50 })
  otherSupporter: string | null;

  @Column("int", { name: "IsSmoking", nullable: true })
  isSmoking: number | null;

  @Column("int", { name: "CigarettePerDay", nullable: true })
  cigarettePerDay: number | null;

  @Column("date", { name: "SmokingSince", nullable: true })
  smokingSince: Date | null;

  @Column("date", { name: "SmokingStop", nullable: true })
  smokingStop: Date | null;

  @Column("int", { name: "IsAlcohol", nullable: true })
  isAlcohol: number | null;

  @Column("int", { name: "UnitsPerWeek", nullable: true })
  unitsPerWeek: number | null;

  @Column("date", { name: "AlcoholSince", nullable: true })
  alcoholSince: Date | null;

  @Column("date", { name: "AlcoholStop", nullable: true })
  alcoholStop: Date | null;

  @Column("varchar", { name: "OtherAllergy", nullable: true, length: 500 })
  otherAllergy: string | null;

  @Column("nvarchar", { name: "Treatment", nullable: true, length: 500 })
  treatment: string | null;

  @Column("varchar", { name: "Followup", nullable: true, length: 500 })
  followup: string | null;

  @Column("varchar", { name: "Medication", nullable: true, length: 500 })
  medication: string | null;

  @Column("int", { name: "Airway", nullable: true })
  airway: number | null;

  @Column("int", { name: "Breathing", nullable: true })
  breathing: number | null;

  @Column("int", { name: "Circulation", nullable: true })
  circulation: number | null;

  @Column("varchar", { name: "CirculationReason", nullable: true, length: 50 })
  circulationReason: string | null;

  @Column("int", { name: "DischargeCondition", nullable: true })
  dischargeCondition: number | null;

  @Column("int", { name: "Disposition", nullable: true })
  disposition: number | null;

  @Column("int", { name: "Priority", nullable: true })
  priority: number | null;

  @Column("time", { name: "TriageTime", nullable: true })
  triageTime: Date | null;

  @Column("time", { name: "PhysicianTriageTime", nullable: true })
  physicianTriageTime: Date | null;

  @Column("varchar", { name: "NurseId", nullable: true, length: 10 })
  nurseId: string | null;

  @Column("datetime", { name: "DischargeDate", nullable: true })
  dischargeDate: Date | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
