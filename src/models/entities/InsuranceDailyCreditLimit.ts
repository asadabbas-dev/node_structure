import { Column, Entity } from "typeorm";

@Entity("InsuranceDailyCreditLimit", { schema: "dbo" })
export class InsuranceDailyCreditLimit {
  @Column("int", { name: "PartyId" })
  partyId: number;

  @Column("varchar", { name: "GroupCode", length: 10 })
  groupCode: string;

  @Column("int", { name: "CreditLimit" })
  creditLimit: number;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
