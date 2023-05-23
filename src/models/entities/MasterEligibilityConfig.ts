import { Column, Entity, Index } from "typeorm";

@Index("PK_MaserEligibilityConfig", ["partyId"], { unique: true })
@Entity("MasterEligibilityConfig", { schema: "dbo" })
export class MasterEligibilityConfig {
  @Column("numeric", {
    primary: true,
    name: "PartyId",
    precision: 18,
    scale: 0,
  })
  partyId: number;

  @Column("varchar", { name: "UserName", length: 50 })
  userName: string;

  @Column("varchar", { name: "Password", length: 50 })
  password: string;

  @Column("varchar", { name: "XML" })
  xml: string;

  @Column("bit", { name: "IsActive" })
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
