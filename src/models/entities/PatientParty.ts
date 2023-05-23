import { Column, Entity, Index } from "typeorm";

@Index("PK_PatientParty", ["registrationId", "pin", "tpaId"], { unique: true })
@Entity("PatientParty", { schema: "dbo" })
export class PatientParty {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 10 })
  pin: string;

  @Column("int", { primary: true, name: "TPAId" })
  tpaId: number;

  @Column("int", { name: "PartyId", nullable: true })
  partyId: number | null;

  @Column("int", { name: "SubPartyId", nullable: true })
  subPartyId: number | null;

  @Column("varchar", { name: "PayerCode", nullable: true, length: 20 })
  payerCode: string | null;

  @Column("int", { name: "PlanId", nullable: true })
  planId: number | null;

  @Column("int", { name: "NetworkId", nullable: true })
  networkId: number | null;

  @Column("varchar", { name: "CardNo", nullable: true, length: 50 })
  cardNo: string | null;

  @Column("date", { name: "CardExpiry", nullable: true })
  cardExpiry: Date | null;

  @Column("varchar", { name: "StaffNo", nullable: true, length: 10 })
  staffNo: string | null;

  @Column("varchar", { name: "ClaimFormNo", nullable: true, length: 50 })
  claimFormNo: string | null;
}
