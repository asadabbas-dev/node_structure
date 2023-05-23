import { Column, Entity, Index } from "typeorm";

@Index("PK_PartyClaimForm", ["partyId"], { unique: true })
@Entity("PartyClaimForm", { schema: "dbo" })
export class PartyClaimForm {
  @Column("int", { primary: true, name: "PartyId" })
  partyId: number;

  @Column("varchar", { name: "ClaimFrom" })
  claimFrom: string;
}
