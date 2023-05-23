import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_FINPREPAIDINTERFACE", ["prepaidid"], { unique: true })
@Entity("FINPREPAIDINTERFACE", { schema: "dbo" })
export class Finprepaidinterface {
  @PrimaryGeneratedColumn({ type: "int", name: "PREPAIDID" })
  prepaidid: number;

  @Column("int", { name: "CLASSID" })
  classid: number;

  @Column("varchar", { name: "TRANSNAME", length: 50 })
  transname: string;

  @Column("varchar", { name: "TRANSTYPE", length: 50 })
  transtype: string;

  @Column("varchar", { name: "BASEACCOUNT", length: 15 })
  baseaccount: string;

  @Column("varchar", { name: "DOCTYPE", length: 5 })
  doctype: string;

  @Column("int", { name: "SUBTYPE" })
  subtype: number;

  @Column("int", { name: "NEWDOCID" })
  newdocid: number;

  @Column("varchar", { name: "NEWDOCTYPE", length: 5 })
  newdoctype: string;

  @Column("int", { name: "NEWSUBTYPE" })
  newsubtype: number;

  @Column("varchar", { name: "DEBITACC", length: 15 })
  debitacc: string;

  @Column("varchar", { name: "DEBITCOSTCODE", length: 10 })
  debitcostcode: string;

  @Column("varchar", { name: "CREDITACC", length: 15 })
  creditacc: string;

  @Column("varchar", { name: "CREDITCOSTCODE", length: 10 })
  creditcostcode: string;

  @Column("int", { name: "PDOCID" })
  pdocid: number;

  @Column("varchar", { name: "PDOCTYPE", length: 5 })
  pdoctype: string;

  @Column("int", { name: "PSUBTYPE" })
  psubtype: number;

  @Column("varchar", { name: "PDEBITACC", length: 15 })
  pdebitacc: string;

  @Column("varchar", { name: "PDEBITCOSTCODE", length: 10 })
  pdebitcostcode: string;

  @Column("varchar", { name: "PCREDITACC", length: 15 })
  pcreditacc: string;

  @Column("varchar", { name: "PCREDITCOSTCODE", length: 10 })
  pcreditcostcode: string;

  @Column("varchar", { name: "PCOMCODE", length: 50 })
  pcomcode: string;

  @Column("bit", { name: "ISACTIVE" })
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
