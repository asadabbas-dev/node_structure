import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_EMRNurseWorkSheet",
  ["registrationId", "pin", "chargeId", "wSheetDate"],
  { unique: true }
)
@Entity("EMRNurseWorkSheet", { schema: "dbo" })
export class EmrNurseWorkSheet {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 10 })
  pin: string;

  @Column("numeric", {
    primary: true,
    name: "ChargeId",
    precision: 18,
    scale: 0,
  })
  chargeId: number;

  @Column("varchar", { name: "ChargeCode", nullable: true, length: 20 })
  chargeCode: string | null;

  @Column("varchar", { name: "PrescribedBy", length: 15 })
  prescribedBy: string;

  @Column("date", { name: "PrescribedDate" })
  prescribedDate: Date;

  @Column("datetime", { primary: true, name: "WSheetDate" })
  wSheetDate: Date;

  @Column("int", { name: "NoofTabs" })
  noofTabs: number;

  @Column("varchar", { name: "Morning", nullable: true, length: 10 })
  morning: string | null;

  @Column("varchar", { name: "Afternoon", nullable: true, length: 10 })
  afternoon: string | null;

  @Column("varchar", { name: "Evening", nullable: true, length: 10 })
  evening: string | null;

  @Column("varchar", { name: "Night", nullable: true, length: 10 })
  night: string | null;

  @Column("varchar", { name: "DoctorRemarks", nullable: true })
  doctorRemarks: string | null;

  @Column("varchar", { name: "Remarks", nullable: true })
  remarks: string | null;

  @Column("varchar", { name: "Witness", nullable: true, length: 20 })
  witness: string | null;

  @Column("varchar", { name: "NurseId", nullable: true, length: 20 })
  nurseId: string | null;

  @Column("datetime", { name: "NurseDate", nullable: true })
  nurseDate: Date | null;

  @Column("varchar", { name: "Remarks1", nullable: true })
  remarks1: string | null;

  @Column("varchar", { name: "Witness1", nullable: true, length: 20 })
  witness1: string | null;

  @Column("varchar", { name: "NurseId1", nullable: true, length: 20 })
  nurseId1: string | null;

  @Column("datetime", { name: "NurseDate1", nullable: true })
  nurseDate1: Date | null;

  @Column("varchar", { name: "Remarks2", nullable: true })
  remarks2: string | null;

  @Column("varchar", { name: "Witness2", nullable: true, length: 20 })
  witness2: string | null;

  @Column("varchar", { name: "NurseId2", nullable: true, length: 20 })
  nurseId2: string | null;

  @Column("datetime", { name: "NurseDate2", nullable: true })
  nurseDate2: Date | null;

  @Column("varchar", { name: "Remarks3", nullable: true })
  remarks3: string | null;

  @Column("varchar", { name: "Witness3", nullable: true, length: 20 })
  witness3: string | null;

  @Column("varchar", { name: "NurseId3", nullable: true, length: 20 })
  nurseId3: string | null;

  @Column("datetime", { name: "NurseDate3", nullable: true })
  nurseDate3: Date | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
