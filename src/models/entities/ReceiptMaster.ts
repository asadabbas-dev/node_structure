import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_ReceiptMaster_1", ["prefix", "receiptNo"], { unique: true })
@Entity("ReceiptMaster", { schema: "dbo" })
export class ReceiptMaster {
  @PrimaryGeneratedColumn({
    type: "numeric",
    name: "InternalId",
    precision: 18,
    scale: 0,
  })
  internalId: number;

  @Column("varchar", { primary: true, name: "Prefix", length: 10 })
  prefix: string;

  @Column("numeric", {
    primary: true,
    name: "ReceiptNo",
    precision: 18,
    scale: 0,
  })
  receiptNo: number;

  @Column("varchar", { name: "ReceiptNumber", nullable: true, length: 17 })
  receiptNumber: string | null;

  @Column("date", { name: "ReceiptDate" })
  receiptDate: Date;

  @Column("numeric", { name: "RegistrationId", precision: 18, scale: 0 })
  registrationId: number;

  @Column("varchar", { name: "ReferenceNumber", nullable: true, length: 15 })
  referenceNumber: string | null;

  @Column("varchar", { name: "PIN", length: 10 })
  pin: string;

  @Column("numeric", { name: "ReceiptAmount", precision: 18, scale: 2 })
  receiptAmount: number;

  @Column("numeric", {
    name: "BalanceAmount",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  balanceAmount: number | null;

  @Column("numeric", { name: "Cash", precision: 18, scale: 2 })
  cash: number;

  @Column("numeric", { name: "Card", precision: 18, scale: 2 })
  card: number;

  @Column("numeric", { name: "Cheque", precision: 18, scale: 2 })
  cheque: number;

  @Column("numeric", {
    name: "BankTransfer",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  bankTransfer: number;

  @Column("varchar", { name: "CardNo", length: 50 })
  cardNo: string;

  @Column("varchar", { name: "BankName", length: 50 })
  bankName: string;

  @Column("bit", { name: "IsPosting", default: () => "(0)" })
  isPosting: boolean;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
