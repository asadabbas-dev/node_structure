import { Column, Entity, Index } from "typeorm";

@Index("PK_EMPCOMPENSATION", ["empid"], { unique: true })
@Entity("EMPCOMPENSATION", { schema: "dbo" })
export class Empcompensation {
  @Column("int", { primary: true, name: "EMPID" })
  empid: number;

  @Column("int", { name: "PAYCYCLE", nullable: true })
  paycycle: number | null;

  @Column("int", { name: "PAYTYPE", nullable: true })
  paytype: number | null;

  @Column("int", { name: "CURRENCYID", nullable: true })
  currencyid: number | null;

  @Column("int", { name: "PAYMODE", nullable: true })
  paymode: number | null;

  @Column("int", { name: "EMPBANKID", nullable: true })
  empbankid: number | null;

  @Column("varchar", { name: "ACCOUNTNO", nullable: true, length: 50 })
  accountno: string | null;

  @Column("int", { name: "COMBANKID", nullable: true })
  combankid: number | null;

  @Column("int", { name: "GRATUITYRULEID", nullable: true })
  gratuityruleid: number | null;

  @Column("int", { name: "RULECODE", nullable: true })
  rulecode: number | null;

  @Column("numeric", {
    name: "BASICPAY",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  basicpay: number | null;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
