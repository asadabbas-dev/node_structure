import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_ChargeDetails", ["inernalBillid", "registrationId", "billno"], {
  unique: true,
})
@Entity("ChargeDetails", { schema: "dbo" })
export class ChargeDetails {
  @PrimaryGeneratedColumn({
    type: "numeric",
    name: "InernalBillid",
    precision: 18,
    scale: 0,
  })
  inernalBillid: number;

  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("numeric", {
    primary: true,
    name: "Billno",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  billno: number;

  @Column("numeric", { name: "TPAId", precision: 18, scale: 0 })
  tpaId: number;

  @Column("varchar", { name: "Prefix", length: 10 })
  prefix: string;

  @Column("varchar", { name: "OrderNumber", nullable: true, length: 17 })
  orderNumber: string | null;

  @Column("int", { name: "PackageId", default: () => "(0)" })
  packageId: number;

  @Column("numeric", { name: "ChargeId", precision: 18, scale: 0 })
  chargeId: number;

  @Column("int", { name: "Quantity" })
  quantity: number;

  @Column("int", { name: "ReturnQuantity", default: () => "(0)" })
  returnQuantity: number;

  @Column("numeric", { name: "Price", precision: 18, scale: 2 })
  price: number;

  @Column("numeric", { name: "Discount", precision: 18, scale: 2 })
  discount: number;

  @Column("numeric", { name: "Net", precision: 18, scale: 2 })
  net: number;

  @Column("numeric", { name: "CashDiscount", precision: 18, scale: 2 })
  cashDiscount: number;

  @Column("numeric", { name: "Total", precision: 18, scale: 2 })
  total: number;

  @Column("numeric", { name: "Deducitable", precision: 18, scale: 2 })
  deducitable: number;

  @Column("numeric", { name: "Copayment", precision: 18, scale: 2 })
  copayment: number;

  @Column("numeric", { name: "PartyAmount", precision: 18, scale: 2 })
  partyAmount: number;

  @Column("numeric", { name: "PatientAmount", precision: 18, scale: 2 })
  patientAmount: number;

  @Column("numeric", { name: "CashAmount", precision: 18, scale: 2 })
  cashAmount: number;

  @Column("numeric", { name: "CardAmount", precision: 18, scale: 2 })
  cardAmount: number;

  @Column("numeric", { name: "ChequeAmount", precision: 18, scale: 2 })
  chequeAmount: number;

  @Column("numeric", { name: "AdvanceAmount", precision: 18, scale: 2 })
  advanceAmount: number;

  @Column("numeric", { name: "DueAmount", precision: 18, scale: 2 })
  dueAmount: number;

  @Column("numeric", {
    name: "BankTransferAmount",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  bankTransferAmount: number;

  @Column("numeric", {
    name: "DueAmountCollected",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  dueAmountCollected: number;

  @Column("numeric", {
    name: "VoucherAmount",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  voucherAmount: number;

  @Column("numeric", {
    name: "SubPartyAmount",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  subPartyAmount: number;

  @Column("bit", { name: "IsCovered" })
  isCovered: boolean;

  @Column("bit", { name: "IsApprovalRequired" })
  isApprovalRequired: boolean;

  @Column("varchar", { name: "ApprovalNo", nullable: true, length: 50 })
  approvalNo: string | null;

  @Column("date", { name: "ApprovalDate", nullable: true })
  approvalDate: Date | null;

  @Column("varchar", { name: "OrderBy", length: 50 })
  orderBy: string;

  @Column("datetime", { name: "OrderDate" })
  orderDate: Date;

  @Column("datetime", { name: "OrderEndDate", nullable: true })
  orderEndDate: Date | null;

  @Column("varchar", { name: "DoctorCode", length: 10 })
  doctorCode: string;

  @Column("varchar", { name: "OrderNo", length: 10 })
  orderNo: string;

  @Column("numeric", {
    name: "CostPrice",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  costPrice: number | null;

  @Column("varchar", { name: "WarehouseCode", nullable: true, length: 10 })
  warehouseCode: string | null;

  @Column("varchar", { name: "BarCode", nullable: true, length: 50 })
  barCode: string | null;

  @Column("varchar", { name: "BatchNumber", nullable: true, length: 20 })
  batchNumber: string | null;

  @Column("date", { name: "BatchDate", nullable: true })
  batchDate: Date | null;

  @Column("date", { name: "BatchExpiry", nullable: true })
  batchExpiry: Date | null;

  @Column("varchar", { name: "Commgrup", nullable: true, length: 10 })
  commgrup: string | null;

  @Column("varchar", { name: "HuomCode", nullable: true, length: 10 })
  huomCode: string | null;

  @Column("bit", { name: "SampleCollected", default: () => "(0)" })
  sampleCollected: boolean;

  @Column("numeric", {
    name: "SampleId",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  sampleId: number | null;

  @Column("numeric", {
    name: "CancelInternalId",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  cancelInternalId: number | null;

  @Column("bit", { name: "IsCancel", default: () => "(0)" })
  isCancel: boolean;

  @Column("bit", { name: "IsStockUpdated", default: () => "(0)" })
  isStockUpdated: boolean;

  @Column("int", { name: "BillStatus", default: () => "(0)" })
  billStatus: number;

  @Column("int", { name: "SerialNo", nullable: true })
  serialNo: number | null;

  @Column("bit", { name: "ServiceDone", default: () => "(0)" })
  serviceDone: boolean;

  @Column("varchar", { name: "ServiceDoneBy", nullable: true, length: 50 })
  serviceDoneBy: string | null;

  @Column("datetime", { name: "ServiceDoneDate", nullable: true })
  serviceDoneDate: Date | null;

  @Column("bit", { name: "ClaimStatus", default: () => "(0)" })
  claimStatus: boolean;

  @Column("varchar", { name: "Remarks", nullable: true })
  remarks: string | null;

  @Column("varchar", { name: "token", nullable: true, length: 100 })
  token: string | null;

  @Column("varchar", { name: "vitals_token", nullable: true, length: 100 })
  vitalsToken: string | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
