import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_FINPREPAIDHDR", ["prepaidid"], { unique: true })
@Entity("FINPREPAIDHDR", { schema: "dbo" })
export class Finprepaidhdr {
  @PrimaryGeneratedColumn({ type: "int", name: "PREPAIDID" })
  prepaidid: number;

  @Column("varchar", { name: "DOCTYPE", length: 5 })
  doctype: string;

  @Column("int", { name: "SUBTYPE" })
  subtype: number;

  @Column("varchar", { name: "DOCNUMBER", length: 15 })
  docnumber: string;

  @Column("int", { name: "CLASSID", default: () => "(0)" })
  classid: number;

  @Column("int", { name: "SUBCLASSID" })
  subclassid: number;

  @Column("date", { name: "DOCDATE" })
  docdate: Date;

  @Column("varchar", { name: "PARTYCODE", length: 10 })
  partycode: string;

  @Column("varchar", { name: "COSTCODE", length: 10 })
  costcode: string;

  @Column("varchar", { name: "NARATION", length: 50 })
  naration: string;

  @Column("varchar", { name: "CURRENCY", length: 5 })
  currency: string;

  @Column("numeric", { name: "EXCHANGE", precision: 18, scale: 2 })
  exchange: number;

  @Column("numeric", { name: "TOTALAMOUNT", precision: 18, scale: 2 })
  totalamount: number;

  @Column("numeric", { name: "ADJAMOUNT", precision: 18, scale: 2 })
  adjamount: number;

  @Column("date", { name: "PERIODFROM" })
  periodfrom: Date;

  @Column("date", { name: "PERIODTO" })
  periodto: Date;

  @Column("int", { name: "INSTALLMENT" })
  installment: number;

  @Column("int", { name: "INSTALLENTRIES" })
  installentries: number;

  @Column("int", { name: "FREQUENCY" })
  frequency: number;

  @Column("varchar", { name: "REFNO", nullable: true, length: 50 })
  refno: string | null;

  @Column("date", { name: "REFDATE", nullable: true })
  refdate: Date | null;

  @Column("varchar", { name: "POLICYNO", nullable: true, length: 50 })
  policyno: string | null;

  @Column("date", { name: "POLICYDATE", nullable: true })
  policydate: Date | null;

  @Column("varchar", { name: "VECHICLENO", nullable: true, length: 50 })
  vechicleno: string | null;

  @Column("bit", { name: "APPORTION", nullable: true })
  apportion: boolean | null;

  @Column("varchar", { name: "JVDOCTYPE", nullable: true, length: 5 })
  jvdoctype: string | null;

  @Column("int", { name: "JVSUBTYPE", nullable: true })
  jvsubtype: number | null;

  @Column("bit", { name: "ISACTIVE" })
  isactive: boolean;

  @Column("bit", { name: "ISSTARTED", default: () => "(0)" })
  isstarted: boolean;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
