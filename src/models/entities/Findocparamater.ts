import { Column, Entity, Index } from "typeorm";

@Index("PK_FINDOCPARAMATER", ["yearcode", "itemtype"], { unique: true })
@Entity("FINDOCPARAMATER", { schema: "dbo" })
export class Findocparamater {
  @Column("int", { primary: true, name: "YEARCODE" })
  yearcode: number;

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

  @Column("bit", { name: "VOUCHER" })
  voucher: boolean;
}
