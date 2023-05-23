import { Column, Entity, Index } from "typeorm";

@Index("PK_EMPDOCUMENT_1", ["empid", "documentno", "doctype"], { unique: true })
@Entity("EMPDOCUMENT", { schema: "dbo" })
export class Empdocument {
  @Column("int", { primary: true, name: "EMPID" })
  empid: number;

  @Column("varchar", { primary: true, name: "DOCUMENTNO", length: 20 })
  documentno: string;

  @Column("int", { primary: true, name: "DOCTYPE" })
  doctype: number;

  @Column("date", { name: "FROMDATE" })
  fromdate: Date;

  @Column("date", { name: "TODATE", nullable: true })
  todate: Date | null;

  @Column("bit", { name: "EXPIRY" })
  expiry: boolean;

  @Column("varchar", { name: "REMARKS", nullable: true, length: 100 })
  remarks: string | null;

  @Column("varbinary", { name: "ATTACHMENT", nullable: true })
  attachment: Buffer | null;

  @Column("varchar", { name: "ATTACHMENTNAME", nullable: true, length: 50 })
  attachmentname: string | null;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
