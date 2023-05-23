import { Column, Entity } from "typeorm";

@Entity("ReclaimDetail", { schema: "dbo" })
export class ReclaimDetail {
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

  @Column("varchar", { name: "IDPayer", nullable: true, length: 50 })
  idPayer: string | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
