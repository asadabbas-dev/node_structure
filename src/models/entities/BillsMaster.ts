import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("IX_BillsMaster", ["billDate", "billNumber", "isCancel"], {})
@Index("PK_BillsMaster", ["internalBillNo", "registrationId", "pin"], {
  unique: true,
})
@Entity("BillsMaster", { schema: "dbo" })
export class BillsMaster {
  @PrimaryGeneratedColumn({
    type: "numeric",
    name: "InternalBillNo",
    precision: 18,
    scale: 0,
  })
  internalBillNo: number;

  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 10 })
  pin: string;

  @Column("varchar", { name: "Prefix", length: 10 })
  prefix: string;

  @Column("numeric", { name: "TPAId", precision: 18, scale: 0 })
  tpaId: number;

  @Column("numeric", { name: "BillNo", precision: 18, scale: 0 })
  billNo: number;

  @Column("varchar", { name: "BillNumber", nullable: true, length: 17 })
  billNumber: string | null;

  @Column("datetime", { name: "BillDate" })
  billDate: Date;

  @Column("numeric", { name: "GrossAmount", precision: 18, scale: 2 })
  grossAmount: number;

  @Column("numeric", { name: "Discount", precision: 18, scale: 2 })
  discount: number;

  @Column("numeric", { name: "NetAmount", precision: 18, scale: 2 })
  netAmount: number;

  @Column("numeric", { name: "PartyAmount", precision: 18, scale: 2 })
  partyAmount: number;

  @Column("numeric", { name: "CashDiscount", precision: 18, scale: 2 })
  cashDiscount: number;

  @Column("numeric", { name: "PateintAmount", precision: 18, scale: 2 })
  pateintAmount: number;

  @Column("numeric", { name: "Cash", precision: 18, scale: 2 })
  cash: number;

  @Column("numeric", { name: "Card", precision: 18, scale: 2 })
  card: number;

  @Column("numeric", { name: "Cheque", precision: 18, scale: 2 })
  cheque: number;

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

  @Column("varchar", { name: "AdvanceReceiptNo", nullable: true, length: 150 })
  advanceReceiptNo: string | null;

  @Column("numeric", {
    name: "DueCollectedAmount",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  dueCollectedAmount: number;

  @Column("varchar", { name: "DueReceiptNo", nullable: true, length: 50 })
  dueReceiptNo: string | null;

  @Column("varchar", { name: "CardNo", length: 50 })
  cardNo: string;

  @Column("varchar", { name: "BankName", length: 50 })
  bankName: string;

  @Column("varchar", { name: "VoucherNo", nullable: true, length: 50 })
  voucherNo: string | null;

  @Column("varchar", { name: "Comments", nullable: true, length: 500 })
  comments: string | null;

  @Column("bit", { name: "IsCancel", default: () => "(0)" })
  isCancel: boolean;

  @Column("date", { name: "CancelDate", nullable: true })
  cancelDate: Date | null;

  @Column("bit", { name: "IsPosting", default: () => "(0)" })
  isPosting: boolean;

  @Column("int", { name: "EClaimStatus", default: () => "(0)" })
  eClaimStatus: number;

  @Column("int", { name: "BillStatus", default: () => "(0)" })
  billStatus: number;

  @Column("int", { name: "BillType", default: () => "(1)" })
  billType: number;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
