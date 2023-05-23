import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_InsPendingApproval", ["approvalId"], { unique: true })
@Entity("InsPendingApproval", { schema: "dbo" })
export class InsPendingApproval {
  @PrimaryGeneratedColumn({
    type: "numeric",
    name: "ApprovalId",
    precision: 18,
    scale: 0,
  })
  approvalId: number;

  @Column("int", { name: "CompCode" })
  compCode: number;

  @Column("varchar", { name: "PIN", length: 50 })
  pin: string;

  @Column("int", { name: "TPAId" })
  tpaId: number;

  @Column("varchar", { name: "DeptCode", length: 10 })
  deptCode: string;

  @Column("varchar", { name: "DoctorCode", length: 10 })
  doctorCode: string;

  @Column("varchar", { name: "CreatedUser", length: 50 })
  createdUser: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ApprovalNo", nullable: true, length: 50 })
  approvalNo: string | null;

  @Column("datetime", { name: "ApprovedDate", nullable: true })
  approvedDate: Date | null;

  @Column("varchar", { name: "ApprovalStaus", nullable: true, length: 50 })
  approvalStaus: string | null;

  @Column("varchar", { name: "ApprovalType", length: 50 })
  approvalType: string;

  @Column("int", { name: "ApprovalTypeCode" })
  approvalTypeCode: number;

  @Column("numeric", { name: "ReferenceId", precision: 18, scale: 0 })
  referenceId: number;

  @Column("date", { name: "ExpiryDate", nullable: true })
  expiryDate: Date | null;

  @Column("int", { name: "NoofSession", default: () => "(0)" })
  noofSession: number;

  @Column("int", {
    name: "RemainingSession",
    nullable: true,
    default: () => "(0)",
  })
  remainingSession: number | null;

  @Column("numeric", {
    name: "ChargeId",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  chargeId: number | null;

  @Column("numeric", {
    name: "Amount",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  amount: number | null;

  @Column("varchar", { name: "Notes", nullable: true, length: 150 })
  notes: string | null;

  @Column("bit", { name: "IsActive", default: () => "(0)" })
  isActive: boolean;

  @Column("varchar", { name: "ModifyUser", length: 50 })
  modifyUser: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
