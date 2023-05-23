import { Column, Entity, Index } from "typeorm";

@Index("PK_EMRPreOPChecklist", ["registrationId", "pin"], { unique: true })
@Entity("EMRPreOPChecklist", { schema: "dbo" })
export class EmrPreOpChecklist {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 15 })
  pin: string;

  @Column("varchar", { name: "SPO2", length: 10 })
  spo2: string;

  @Column("varchar", { name: "RespRate", length: 10 })
  respRate: string;

  @Column("varchar", { name: "BP", length: 10 })
  bp: string;

  @Column("varchar", { name: "Pulse", length: 10 })
  pulse: string;

  @Column("varchar", { name: "HeartRate", length: 10 })
  heartRate: string;

  @Column("varchar", { name: "Temprature", length: 10 })
  temprature: string;

  @Column("int", { name: "Indentity" })
  indentity: number;

  @Column("int", { name: "BSR" })
  bsr: number;

  @Column("int", { name: "Gown" })
  gown: number;

  @Column("int", { name: "WristBand" })
  wristBand: number;

  @Column("int", { name: "OtherItem" })
  otherItem: number;

  @Column("int", { name: "UnderGarment" })
  underGarment: number;

  @Column("int", { name: "Consent" })
  consent: number;

  @Column("int", { name: "Antibiotic" })
  antibiotic: number;

  @Column("int", { name: "Branula" })
  branula: number;

  @Column("int", { name: "Laborder" })
  laborder: number;

  @Column("int", { name: "Radiology" })
  radiology: number;

  @Column("int", { name: "Crossmatch" })
  crossmatch: number;

  @Column("int", { name: "Blood" })
  blood: number;

  @Column("int", { name: "Bed" })
  bed: number;

  @Column("int", { name: "Site" })
  site: number;

  @Column("int", { name: "Orders" })
  orders: number;

  @Column("int", { name: "Bags" })
  bags: number;

  @Column("int", { name: "BagPlace" })
  bagPlace: number;

  @Column("varchar", { name: "PatientRelative", length: 50 })
  patientRelative: string;

  @Column("varchar", { name: "RelativeName", length: 50 })
  relativeName: string;

  @Column("varchar", { name: "DOB", length: 50 })
  dob: string;

  @Column("varchar", { name: "Gender", length: 50 })
  gender: string;

  @Column("varchar", { name: "Relationship", length: 50 })
  relationship: string;

  @Column("varchar", { name: "Phone", length: 50 })
  phone: string;

  @Column("varchar", { name: "CNIC", length: 50 })
  cnic: string;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
