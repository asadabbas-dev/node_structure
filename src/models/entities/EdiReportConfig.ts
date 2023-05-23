import { Column, Entity, Index } from "typeorm";

@Index("PK_EDIReportConfig", ["partyId", "columnId"], { unique: true })
@Entity("EDIReportConfig", { schema: "dbo" })
export class EdiReportConfig {
  @Column("int", { primary: true, name: "PartyId" })
  partyId: number;

  @Column("int", { primary: true, name: "ColumnId" })
  columnId: number;

  @Column("varchar", { name: "ColumnName", length: 50 })
  columnName: string;

  @Column("varchar", { name: "DisplayName", length: 50 })
  displayName: string;

  @Column("int", { name: "OrderColumn" })
  orderColumn: number;

  @Column("bit", { name: "GroupBy" })
  groupBy: boolean;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
