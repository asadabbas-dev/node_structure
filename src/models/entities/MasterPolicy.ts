import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_MasterPolicy_1", ["policyId", "partyId"], { unique: true })
@Entity("MasterPolicy", { schema: "dbo" })
export class MasterPolicy {
  @PrimaryGeneratedColumn({
    type: "numeric",
    name: "PolicyId",
    precision: 18,
    scale: 0,
  })
  policyId: number;

  @Column("numeric", {
    primary: true,
    name: "PartyId",
    precision: 18,
    scale: 0,
  })
  partyId: number;

  @Column("numeric", {
    name: "TPAId",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  tpaId: number;

  @Column("varchar", { name: "PolicyCode", nullable: true, length: 50 })
  policyCode: string | null;

  @Column("varchar", { name: "PolicyName", length: 50 })
  policyName: string;

  @Column("varchar", { name: "PlanId", length: 50 })
  planId: string;

  @Column("date", { name: "ExpiryDate" })
  expiryDate: Date;

  @Column("int", { name: "DeductibleType" })
  deductibleType: number;

  @Column("int", { name: "Deductible" })
  deductible: number;

  @Column("int", { name: "DeductibleMax", default: () => "(0)" })
  deductibleMax: number;

  @Column("int", { name: "CopaymentType", default: () => "(0)" })
  copaymentType: number;

  @Column("int", { name: "Copayment", default: () => "(0)" })
  copayment: number;

  @Column("bit", { name: "IsPriceList" })
  isPriceList: boolean;

  @Column("bit", { name: "IsClaimFormNo" })
  isClaimFormNo: boolean;

  @Column("bit", { name: "IsDependentNo" })
  isDependentNo: boolean;

  @Column("bit", { name: "IsCertificateNo" })
  isCertificateNo: boolean;

  @Column("bit", { name: "IsDeductiableDis" })
  isDeductiableDis: boolean;

  @Column("bit", { name: "IsCopaymentDis" })
  isCopaymentDis: boolean;

  @Column("bit", { name: "IsCopayConsultation" })
  isCopayConsultation: boolean;

  @Column("bit", { name: "IsNonCoverServiceParty" })
  isNonCoverServiceParty: boolean;

  @Column("bit", { name: "IsCopaySubParty", default: () => "(0)" })
  isCopaySubParty: boolean;

  @Column("int", { name: "CreditLimit", default: () => "(0)" })
  creditLimit: number;

  @Column("varchar", { name: "Notes", nullable: true, length: 100 })
  notes: string | null;

  @Column("bit", { name: "IsActive", default: () => "(0)" })
  isActive: boolean;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
