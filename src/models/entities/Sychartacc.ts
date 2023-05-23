import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_SYCHARTACC", ["compcode", "accountid", "accountcode"], {
  unique: true,
})
@Entity("SYCHARTACC", { schema: "dbo" })
export class Sychartacc {
  @Column("varchar", { primary: true, name: "COMPCODE", length: 5 })
  compcode: string;

  @PrimaryGeneratedColumn({ type: "int", name: "ACCOUNTID" })
  accountid: number;

  @Column("int", { name: "PARENTID" })
  parentid: number;

  @Column("varchar", { primary: true, name: "ACCOUNTCODE", length: 10 })
  accountcode: string;

  @Column("int", { name: "LEVELCODE" })
  levelcode: number;

  @Column("varchar", { name: "ACCOUNTNAME", length: 100 })
  accountname: string;

  @Column("int", { name: "ACCOUNTTYPE" })
  accounttype: number;

  @Column("bit", { name: "ISSUBLEDGER" })
  issubledger: boolean;

  @Column("varchar", { name: "ACCOUNTTRANSTYPE", length: 50 })
  accounttranstype: string;

  @Column("bit", { name: "ISEMPLOYEEACC" })
  isemployeeacc: boolean;

  @Column("varchar", { name: "COSTCODE", length: 10 })
  costcode: string;

  @Column("bit", { name: "ISCOSCODEMODIFY" })
  iscoscodemodify: boolean;

  @Column("bit", { name: "ISRECEIVABLEACC" })
  isreceivableacc: boolean;

  @Column("bit", { name: "ISPAYABLEACC" })
  ispayableacc: boolean;

  @Column("bit", { name: "ISGLACC" })
  isglacc: boolean;

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
