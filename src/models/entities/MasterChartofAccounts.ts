import { Column, Entity, Index } from "typeorm";

@Index("PK_MasterChartofAccounts", ["accountId"], { unique: true })
@Entity("MasterChartofAccounts", { schema: "dbo" })
export class MasterChartofAccounts {
  @Column("int", { primary: true, name: "AccountId" })
  accountId: number;

  @Column("int", { name: "MainAccountId" })
  mainAccountId: number;

  @Column("varchar", { name: "AccountCode", nullable: true, length: 7 })
  accountCode: string | null;

  @Column("varchar", { name: "AccountName", length: 150 })
  accountName: string;

  @Column("int", { name: "AccountType" })
  accountType: number;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
