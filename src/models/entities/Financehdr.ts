import { Column, Entity, Index } from "typeorm";

@Index("PK_FINANCEHDR", ["doctype", "subtype", "docnumber"], { unique: true })
@Entity("FINANCEHDR", { schema: "dbo" })
export class Financehdr {
  @Column("varchar", { primary: true, name: "DOCTYPE", length: 5 })
  doctype: string;

  @Column("varchar", { primary: true, name: "SUBTYPE", length: 5 })
  subtype: string;

  @Column("varchar", { primary: true, name: "DOCNUMBER", length: 20 })
  docnumber: string;

  @Column("date", { name: "DOCDATE" })
  docdate: Date;

  @Column("varchar", { name: "REMARKS", nullable: true, length: 150 })
  remarks: string | null;

  @Column("bit", { name: "STATUS", default: () => "(0)" })
  status: boolean;

  @Column("bit", { name: "CLOSED", default: () => "(0)" })
  closed: boolean;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
