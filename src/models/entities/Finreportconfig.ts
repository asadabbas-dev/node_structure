import { Column, Entity, Index } from "typeorm";

@Index("PK_FINREPORTCONFIG", ["reportId", "lineNumber"], { unique: true })
@Entity("FINREPORTCONFIG", { schema: "dbo" })
export class Finreportconfig {
  @Column("int", { primary: true, name: "ReportId" })
  reportId: number;

  @Column("int", { primary: true, name: "LineNumber" })
  lineNumber: number;

  @Column("int", { name: "ParentId" })
  parentId: number;

  @Column("varchar", { name: "Heading", length: 50 })
  heading: string;

  @Column("varchar", { name: "LineItem", length: 50 })
  lineItem: string;

  @Column("varchar", { name: "RecordType", length: 50 })
  recordType: string;

  @Column("varchar", { name: "SignValue", length: 50 })
  signValue: string;

  @Column("varchar", { name: "TotalLineNo", nullable: true, length: 50 })
  totalLineNo: string | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
