import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_MasterParty", ["partyId"], { unique: true })
@Entity("MasterParty", { schema: "dbo" })
export class MasterParty {
  @PrimaryGeneratedColumn({ type: "int", name: "PartyId" })
  partyId: number;

  @Column("varchar", { name: "PartyCode", length: 20 })
  partyCode: string;

  @Column("varchar", { name: "PartyLicenceNo", nullable: true, length: 50 })
  partyLicenceNo: string | null;

  @Column("varchar", { name: "PartyName", length: 150 })
  partyName: string;

  @Column("int", { name: "TPAId" })
  tpaId: number;

  @Column("int", { name: "MainPartyId" })
  mainPartyId: number;

  @Column("int", { name: "PartyType", default: () => "(0)" })
  partyType: number;

  @Column("bit", { name: "IsActive" })
  isActive: boolean;

  @Column("varchar", { name: "LicenceNumber", nullable: true, length: 20 })
  licenceNumber: string | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
