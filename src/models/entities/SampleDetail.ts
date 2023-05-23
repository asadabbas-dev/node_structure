import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_SampleDetail", ["requistionId", "sampleId", "registrationId"], {
  unique: true,
})
@Entity("SampleDetail", { schema: "dbo" })
export class SampleDetail {
  @PrimaryGeneratedColumn({
    type: "numeric",
    name: "RequistionId",
    precision: 18,
    scale: 0,
  })
  requistionId: number;

  @Column("numeric", {
    primary: true,
    name: "SampleId",
    precision: 18,
    scale: 0,
  })
  sampleId: number;

  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("numeric", { name: "InernalBillid", precision: 18, scale: 0 })
  inernalBillid: number;

  @Column("int", { name: "ChargeId" })
  chargeId: number;

  @Column("varchar", { name: "SampleNumber", length: 20 })
  sampleNumber: string;

  @Column("bit", { name: "SampleCollected", default: () => "(0)" })
  sampleCollected: boolean;

  @Column("bit", { name: "ResultEntered", default: () => "(0)" })
  resultEntered: boolean;

  @Column("bit", { name: "ResultAutheticated", default: () => "(0)" })
  resultAutheticated: boolean;

  @Column("bit", { name: "IsCancel", default: () => "(0)" })
  isCancel: boolean;

  @Column("varchar", { name: "TechnicianId", nullable: true, length: 10 })
  technicianId: string | null;

  @Column("varchar", { name: "PathologistId", nullable: true, length: 10 })
  pathologistId: string | null;

  @Column("varchar", { name: "TestRemarks", nullable: true })
  testRemarks: string | null;

  @Column("bit", { name: "DoctorApproval", default: () => "(0)" })
  doctorApproval: boolean;

  @Column("varchar", {
    name: "DoctorAction",
    length: 50,
    default: () => "'No action'",
  })
  doctorAction: string;

  @Column("bit", { name: "ActionTaken", default: () => "(0)" })
  actionTaken: boolean;

  @Column("varchar", { name: "Remarks", nullable: true, length: 500 })
  remarks: string | null;

  @Column("datetime", { name: "ResultDate", nullable: true })
  resultDate: Date | null;

  @Column("datetime", { name: "ApprovalDate", nullable: true })
  approvalDate: Date | null;

  @Column("datetime", { name: "DoctorApprovalDate", nullable: true })
  doctorApprovalDate: Date | null;

  @Column("bit", { name: "SMS", default: () => "(0)" })
  sms: boolean;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
