import { Column, Entity, Index } from "typeorm";

@Index("PK_PARTYDOCUMENT", ["partyid", "documentno"], { unique: true })
@Entity("PARTYDOCUMENT", { schema: "dbo" })
export class Partydocument {
  @Column("int", { primary: true, name: "PARTYID" })
  partyid: number;

  @Column("varchar", { primary: true, name: "DOCUMENTNO", length: 50 })
  documentno: string;

  @Column("varchar", { name: "DOCUMENTNAME", length: 50 })
  documentname: string;

  @Column("date", { name: "DOCUMENTDATE", nullable: true })
  documentdate: Date | null;

  @Column("date", { name: "EXPIRYDATE", nullable: true })
  expirydate: Date | null;

  @Column("numeric", {
    name: "DOCUMENTVALUE",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  documentvalue: number | null;

  @Column("varbinary", { name: "FILENAME" })
  filename: Buffer;

  @Column("bit", { name: "ISACTIVE", default: () => "(0)" })
  isactive: boolean;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
