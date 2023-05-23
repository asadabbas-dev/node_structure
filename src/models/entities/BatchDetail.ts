import { Column, Entity } from "typeorm";

@Entity("BatchDetail", { schema: "dbo" })
export class BatchDetail {
  @Column("numeric", { name: "BachId", precision: 18, scale: 0 })
  bachId: number;

  @Column("varchar", { name: "InvoiceNumber", length: 12 })
  invoiceNumber: string;

  @Column("numeric", { name: "InternalBillId", precision: 18, scale: 0 })
  internalBillId: number;

  @Column("int", { name: "ChargeId" })
  chargeId: number;

  @Column("varchar", { name: "ChargeCode", length: 50 })
  chargeCode: string;

  @Column("datetime", { name: "ChargeDate" })
  chargeDate: Date;

  @Column("int", { name: "Quantity" })
  quantity: number;

  @Column("numeric", { name: "Gross", precision: 18, scale: 2 })
  gross: number;

  @Column("numeric", { name: "Discount", precision: 18, scale: 2 })
  discount: number;

  @Column("numeric", { name: "Net", precision: 18, scale: 2 })
  net: number;

  @Column("numeric", { name: "Deducitable", precision: 18, scale: 2 })
  deducitable: number;

  @Column("numeric", { name: "Copayment", precision: 18, scale: 2 })
  copayment: number;

  @Column("numeric", { name: "PatientShare", precision: 18, scale: 2 })
  patientShare: number;

  @Column("numeric", { name: "ClaimAmount", precision: 18, scale: 2 })
  claimAmount: number;

  @Column("numeric", { name: "ReceicedAmount", precision: 18, scale: 2 })
  receicedAmount: number;

  @Column("numeric", {
    name: "AllocationAmount",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  allocationAmount: number | null;

  @Column("varchar", { name: "RejectionReason", nullable: true, length: 10 })
  rejectionReason: string | null;

  @Column("varchar", { name: "PaymentReference", nullable: true, length: 50 })
  paymentReference: string | null;

  @Column("int", { name: "BatchStatus", default: () => "(0)" })
  batchStatus: number;

  @Column("varchar", { name: "ResubmissionType", nullable: true, length: 50 })
  resubmissionType: string | null;

  @Column("varchar", {
    name: "ResubmissionComments",
    nullable: true,
    length: 150,
  })
  resubmissionComments: string | null;

  @Column("date", { name: "ReclaimDate", nullable: true })
  reclaimDate: Date | null;

  @Column("int", { name: "ClaimCount", default: () => "(1)" })
  claimCount: number;

  @Column("bit", { name: "CardImage", default: () => "(0)" })
  cardImage: boolean;

  @Column("bit", { name: "VirtualRecord", default: () => "(0)" })
  virtualRecord: boolean;

  @Column("bit", { name: "Laboratory", default: () => "(0)" })
  laboratory: boolean;

  @Column("bit", { name: "Radiology", default: () => "(0)" })
  radiology: boolean;

  @Column("bit", { name: "MedicalReport", default: () => "(0)" })
  medicalReport: boolean;

  @Column("int", { name: "SerialNo", nullable: true })
  serialNo: number | null;

  @Column("varchar", { name: "IDPayer", nullable: true, length: 50 })
  idPayer: string | null;

  @Column("bit", { name: "WriteOff", default: () => "(0)" })
  writeOff: boolean;

  @Column("varchar", { name: "WriteOffReason", nullable: true, length: 100 })
  writeOffReason: string | null;

  @Column("varchar", { name: "WriteOffBy", nullable: true, length: 50 })
  writeOffBy: string | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
