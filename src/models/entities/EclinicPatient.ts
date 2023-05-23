import { Column, Entity, Index } from "typeorm";

@Index("PK_EclinicPatient", ["scheduleToken"], { unique: true })
@Entity("EclinicPatient", { schema: "dbo" })
export class EclinicPatient {
  @Column("varchar", { primary: true, name: "schedule_token", length: 200 })
  scheduleToken: string;

  @Column("varchar", { name: "upi", length: 50 })
  upi: string;

  @Column("varchar", { name: "patientname", length: 200 })
  patientname: string;

  @Column("varchar", { name: "gender", length: 50 })
  gender: string;

  @Column("date", { name: "dob" })
  dob: Date;

  @Column("varchar", { name: "address", nullable: true, length: 500 })
  address: string | null;

  @Column("varchar", { name: "phone", nullable: true, length: 50 })
  phone: string | null;

  @Column("int", { name: "hmo", nullable: true })
  hmo: number | null;

  @Column("varchar", { name: "hmo_number", nullable: true, length: 50 })
  hmoNumber: string | null;

  @Column("varchar", { name: "hmo_company", nullable: true, length: 50 })
  hmoCompany: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 50 })
  email: string | null;

  @Column("varchar", { name: "marital_status", nullable: true, length: 50 })
  maritalStatus: string | null;

  @Column("varchar", { name: "nok_full_name", nullable: true, length: 150 })
  nokFullName: string | null;

  @Column("varchar", { name: "nok_relationship", nullable: true, length: 50 })
  nokRelationship: string | null;

  @Column("varchar", { name: "nok_phone", nullable: true, length: 50 })
  nokPhone: string | null;

  @Column("varchar", { name: "nok_address", nullable: true, length: 300 })
  nokAddress: string | null;

  @Column("varchar", { name: "patient_type", nullable: true, length: 50 })
  patientType: string | null;

  @Column("varchar", { name: "main_consultant", nullable: true, length: 50 })
  mainConsultant: string | null;

  @Column("varchar", { name: "vitals_token", nullable: true, length: 200 })
  vitalsToken: string | null;

  @Column("varchar", { name: "session_token", nullable: true, length: 200 })
  sessionToken: string | null;

  @Column("numeric", {
    name: "registrationid",
    nullable: true,
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  registrationid: number | null;

  @Column("bit", { name: "updated", default: () => "(0)" })
  updated: boolean;

  @Column("varchar", { name: "card_number", length: 50 })
  cardNumber: string;
}
