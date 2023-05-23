import { Column, Entity, Index } from "typeorm";

@Index("PK_DetailPolicy", ["policyId", "partyId", "groupCode"], {
  unique: true,
})
@Entity("DetailPolicy", { schema: "dbo" })
export class DetailPolicy {
  @Column("numeric", {
    primary: true,
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

  @Column("varchar", { primary: true, name: "GroupCode", length: 20 })
  groupCode: string;

  @Column("int", { name: "OPCopaymentType" })
  opCopaymentType: number;

  @Column("int", { name: "OPCopayment" })
  opCopayment: number;

  @Column("int", { name: "IPCopaymentType" })
  ipCopaymentType: number;

  @Column("int", { name: "IPCopayment" })
  ipCopayment: number;

  @Column("int", { name: "Discount" })
  discount: number;

  @Column("bit", { name: "IsCovered" })
  isCovered: boolean;

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
