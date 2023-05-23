import { Column, Entity, Index } from "typeorm";

@Index("PK_PolicyDepartment", ["partyId", "policyId", "deptCode"], {
  unique: true,
})
@Entity("PolicyDepartment", { schema: "dbo" })
export class PolicyDepartment {
  @Column("numeric", {
    primary: true,
    name: "PartyId",
    precision: 18,
    scale: 0,
  })
  partyId: number;

  @Column("numeric", {
    primary: true,
    name: "PolicyId",
    precision: 18,
    scale: 0,
  })
  policyId: number;

  @Column("varchar", { primary: true, name: "DeptCode", length: 20 })
  deptCode: string;

  @Column("numeric", { name: "CreditLimit", precision: 18, scale: 2 })
  creditLimit: number;

  @Column("bit", { name: "IsApproval" })
  isApproval: boolean;

  @Column("bit", { name: "IsActive" })
  isActive: boolean;
}
