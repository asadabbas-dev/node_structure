import { Column, Entity, Index } from "typeorm";

@Index("PK_EMPSETTLEMENTHDR", ["empid"], { unique: true })
@Entity("EMPSETTLEMENTHDR", { schema: "dbo" })
export class Empsettlementhdr {
  @Column("int", { primary: true, name: "EMPID" })
  empid: number;

  @Column("int", { name: "GRATUITYTYPE" })
  gratuitytype: number;

  @Column("date", { name: "DOCDATE" })
  docdate: Date;

  @Column("date", { name: "JOINDATE" })
  joindate: Date;

  @Column("date", { name: "EFFECTFROM" })
  effectfrom: Date;

  @Column("date", { name: "EFFECTTO" })
  effectto: Date;

  @Column("numeric", { name: "BASICPAY", precision: 18, scale: 2 })
  basicpay: number;

  @Column("int", { name: "RULECODE" })
  rulecode: number;

  @Column("int", { name: "NOTICEPAY" })
  noticepay: number;

  @Column("int", { name: "NOTICEPAYDAYS" })
  noticepaydays: number;

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
