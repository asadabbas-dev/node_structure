import { Column, Entity } from "typeorm";

@Entity("MasterAccountCode", { schema: "dbo" })
export class MasterAccountCode {
  @Column("varchar", { name: "CashAccount", length: 10 })
  cashAccount: string;

  @Column("varchar", { name: "CardAccount", length: 10 })
  cardAccount: string;

  @Column("varchar", { name: "ChequeAccount", length: 10 })
  chequeAccount: string;

  @Column("varchar", { name: "DueAccount", length: 10 })
  dueAccount: string;

  @Column("varchar", { name: "AdvanceAccount", length: 10 })
  advanceAccount: string;

  @Column("varchar", { name: "RefundAccount", length: 10 })
  refundAccount: string;

  @Column("varchar", { name: "VoucherAccount", nullable: true, length: 10 })
  voucherAccount: string | null;

  @Column("varchar", {
    name: "BankTransferAccount",
    nullable: true,
    length: 10,
  })
  bankTransferAccount: string | null;

  @Column("varchar", { name: "DueReceiptAccount", nullable: true, length: 10 })
  dueReceiptAccount: string | null;

  @Column("varchar", { name: "InsuranceAccount", length: 10 })
  insuranceAccount: string;

  @Column("varchar", { name: "CompanyAccount", length: 10 })
  companyAccount: string;

  @Column("varchar", { name: "CashDiscount", length: 10 })
  cashDiscount: string;

  @Column("varchar", { name: "SelfDocType", nullable: true, length: 10 })
  selfDocType: string | null;

  @Column("varchar", { name: "SelfSubType", nullable: true, length: 10 })
  selfSubType: string | null;

  @Column("varchar", { name: "InsuranceDocType", nullable: true, length: 10 })
  insuranceDocType: string | null;

  @Column("varchar", { name: "InsuranceSubType", nullable: true, length: 10 })
  insuranceSubType: string | null;

  @Column("varchar", { name: "CompanyDoctype", nullable: true, length: 10 })
  companyDoctype: string | null;

  @Column("varchar", { name: "CompanySubType", nullable: true, length: 10 })
  companySubType: string | null;

  @Column("varchar", { name: "DueDocType", nullable: true, length: 10 })
  dueDocType: string | null;

  @Column("varchar", { name: "DueSubType", nullable: true, length: 10 })
  dueSubType: string | null;

  @Column("varchar", { name: "DueSubledger", nullable: true, length: 10 })
  dueSubledger: string | null;

  @Column("varchar", { name: "AdvanceDocType", nullable: true, length: 10 })
  advanceDocType: string | null;

  @Column("varchar", { name: "AdvanceSubType", nullable: true, length: 10 })
  advanceSubType: string | null;

  @Column("varchar", { name: "RefundDocType", nullable: true, length: 10 })
  refundDocType: string | null;

  @Column("varchar", { name: "RefundSubType", nullable: true, length: 10 })
  refundSubType: string | null;

  @Column("varchar", { name: "CancelDocType", nullable: true, length: 10 })
  cancelDocType: string | null;

  @Column("varchar", { name: "CancelSubType", nullable: true, length: 10 })
  cancelSubType: string | null;

  @Column("varchar", { name: "CancelAccount", nullable: true, length: 10 })
  cancelAccount: string | null;

  @Column("varchar", { name: "PSelfDocType", nullable: true, length: 10 })
  pSelfDocType: string | null;

  @Column("varchar", { name: "PSelfSubType", nullable: true, length: 10 })
  pSelfSubType: string | null;

  @Column("varchar", { name: "PInsuranceDocType", nullable: true, length: 10 })
  pInsuranceDocType: string | null;

  @Column("varchar", { name: "PInsuranceSubType", nullable: true, length: 10 })
  pInsuranceSubType: string | null;

  @Column("varchar", { name: "PCompanyDoctype", nullable: true, length: 10 })
  pCompanyDoctype: string | null;

  @Column("varchar", { name: "PCompanySubType", nullable: true, length: 10 })
  pCompanySubType: string | null;

  @Column("varchar", { name: "PReturnDocType", nullable: true, length: 10 })
  pReturnDocType: string | null;

  @Column("varchar", { name: "PReturnSubType", nullable: true, length: 10 })
  pReturnSubType: string | null;
}
