import { Column, Entity, Index } from "typeorm";

@Index("PK_PAYPROCESSHDR", ["payid", "paymonth", "payyear", "empcode"], {
  unique: true,
})
@Entity("PAYPROCESSHDR", { schema: "dbo" })
export class Payprocesshdr {
  @Column("int", { primary: true, name: "PAYID" })
  payid: number;

  @Column("int", { name: "PAYCYCLE" })
  paycycle: number;

  @Column("int", { name: "CATEGORYID" })
  categoryid: number;

  @Column("int", { primary: true, name: "PAYMONTH" })
  paymonth: number;

  @Column("int", { primary: true, name: "PAYYEAR" })
  payyear: number;

  @Column("date", { name: "STARTDATE" })
  startdate: Date;

  @Column("date", { name: "ENDDATE" })
  enddate: Date;

  @Column("varchar", { primary: true, name: "EMPCODE", length: 15 })
  empcode: string;

  @Column("numeric", { name: "BASICPAY", precision: 18, scale: 2 })
  basicpay: number;

  @Column("numeric", { name: "GROSSPAY", precision: 18, scale: 2 })
  grosspay: number;

  @Column("numeric", { name: "DEDUCTIONAMT", precision: 18, scale: 2 })
  deductionamt: number;

  @Column("numeric", { name: "NETPAY", precision: 18, scale: 2 })
  netpay: number;

  @Column("smallint", { name: "STATUS" })
  status: number;

  @Column("bit", { name: "PAYSTATUS", nullable: true })
  paystatus: boolean | null;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
