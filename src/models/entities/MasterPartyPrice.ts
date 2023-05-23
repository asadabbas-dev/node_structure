import { Column, Entity, Index } from "typeorm";

@Index("PK_MasterPartyPrice", ["partyId", "policyId", "priceId", "chargeId"], {
  unique: true,
})
@Entity("MasterPartyPrice", { schema: "dbo" })
export class MasterPartyPrice {
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

  @Column("int", { primary: true, name: "PriceId" })
  priceId: number;

  @Column("numeric", {
    primary: true,
    name: "ChargeId",
    precision: 18,
    scale: 0,
  })
  chargeId: number;

  @Column("varchar", { name: "DeptCode", nullable: true, length: 50 })
  deptCode: string | null;

  @Column("numeric", {
    name: "Price",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  price: number;

  @Column("bit", { name: "IsCovered" })
  isCovered: boolean;

  @Column("bit", { name: "IsAppovalNeed" })
  isAppovalNeed: boolean;

  @Column("varchar", { name: "ICDCode", nullable: true, length: 10 })
  icdCode: string | null;

  @Column("bit", { name: "IsPriceChange", default: () => "(0)" })
  isPriceChange: boolean;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
