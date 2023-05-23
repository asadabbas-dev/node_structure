import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index(
  "IX_PatientRegistration",
  ["registrationId", "registrationDate", "pin", "doctorCode", "deptCode"],
  {}
)
@Index("PK_PatientRegistration", ["registrationId", "pin"], { unique: true })
@Entity("PatientRegistration", { schema: "dbo" })
export class PatientRegistration {
  @PrimaryGeneratedColumn({
    type: "numeric",
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 10 })
  pin: string;

  @Column("int", { name: "TokenNumber" })
  tokenNumber: number;

  @Column("datetime", { name: "RegistrationDate" })
  registrationDate: Date;

  @Column("varchar", { name: "DeptCode", length: 10 })
  deptCode: string;

  @Column("varchar", { name: "DoctorCode", length: 10 })
  doctorCode: string;

  @Column("varchar", { name: "CompanionName", length: 100 })
  companionName: string;

  @Column("int", { name: "RelationId" })
  relationId: number;

  @Column("varchar", { name: "CompanionNo", length: 50 })
  companionNo: string;

  @Column("int", { name: "EncounterType" })
  encounterType: number;

  @Column("int", { name: "EncounterStart" })
  encounterStart: number;

  @Column("varchar", { name: "AdmittingDoctorCode", length: 10 })
  admittingDoctorCode: string;

  @Column("varchar", { name: "PrimaryNurseCode", length: 10 })
  primaryNurseCode: string;

  @Column("int", { name: "ReferralId" })
  referralId: number;

  @Column("int", { name: "PatientType" })
  patientType: number;

  @Column("int", { name: "TPAId", nullable: true })
  tpaId: number | null;

  @Column("int", { name: "PartyId", nullable: true })
  partyId: number | null;

  @Column("int", { name: "SubPartyId", nullable: true })
  subPartyId: number | null;

  @Column("int", { name: "PlanId", nullable: true })
  planId: number | null;

  @Column("varchar", { name: "CardNo", nullable: true, length: 50 })
  cardNo: string | null;

  @Column("date", { name: "CardExpiry", nullable: true })
  cardExpiry: Date | null;

  @Column("varchar", { name: "StaffNo", nullable: true, length: 10 })
  staffNo: string | null;

  @Column("varchar", { name: "CertificateNo", nullable: true, length: 20 })
  certificateNo: string | null;

  @Column("varchar", { name: "DependentNo", nullable: true, length: 20 })
  dependentNo: string | null;

  @Column("varchar", { name: "ClaimFormNo", nullable: true, length: 20 })
  claimFormNo: string | null;

  @Column("int", { name: "VisitType" })
  visitType: number;

  @Column("int", { name: "RegistrationType", default: () => "(0)" })
  registrationType: number;

  @Column("int", { name: "Status" })
  status: number;

  @Column("int", { name: "BedId", nullable: true })
  bedId: number | null;

  @Column("varchar", { name: "StatusReason", nullable: true, length: 500 })
  statusReason: string | null;

  @Column("numeric", {
    name: "AppointmentId",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  appointmentId: number | null;

  @Column("numeric", {
    name: "InternalReferralId",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  internalReferralId: number | null;

  @Column("bit", { name: "IsNewborn", default: () => "(0)" })
  isNewborn: boolean;

  @Column("numeric", {
    name: "MotherRegistrationId",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  motherRegistrationId: number;

  @Column("varchar", { name: "ApprovalNo", nullable: true, length: 50 })
  approvalNo: string | null;

  @Column("bit", { name: "SMS", default: () => "(0)" })
  sms: boolean;

  @Column("bit", { name: "SMSDoc", default: () => "(0)" })
  smsDoc: boolean;

  @Column("bit", { name: "NewPatient", default: () => "(0)" })
  newPatient: boolean;

  @Column("int", { name: "PackageId", default: () => "(0)" })
  packageId: number;

  @Column("int", { name: "PackageCount", default: () => "(0)" })
  packageCount: number;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
