import { Column, Entity, Index } from "typeorm";

@Index("PK_FINBANKDOCPARAM", ["accountcode", "itemtype"], { unique: true })
@Entity("FINBANKDOCPARAM", { schema: "dbo" })
export class Finbankdocparam {
  @Column("varchar", { primary: true, name: "ACCOUNTCODE", length: 10 })
  accountcode: string;

  @Column("int", { primary: true, name: "ITEMTYPE" })
  itemtype: number;

  @Column("int", { name: "DOCUMENTID" })
  documentid: number;

  @Column("varchar", { name: "DOCUMENTNAME", nullable: true, length: 50 })
  documentname: string | null;

  @Column("varchar", { name: "DOCPREFIX", nullable: true, length: 5 })
  docprefix: string | null;

  @Column("varchar", { name: "DOCTYPE", nullable: true, length: 5 })
  doctype: string | null;

  @Column("int", { name: "SUBTYPE", nullable: true })
  subtype: number | null;
}
