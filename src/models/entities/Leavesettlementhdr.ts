import { Column, Entity, Index } from "typeorm";

@Index("PK_LEAVESETTLEMENTHDR", ["transid"], { unique: true })
@Entity("LEAVESETTLEMENTHDR", { schema: "dbo" })
export class Leavesettlementhdr {
  @Column("int", { primary: true, name: "TRANSID" })
  transid: number;

  @Column("varchar", { name: "TRANSNO", nullable: true, length: 9 })
  transno: string | null;

  @Column("int", { name: "CATEGORYID" })
  categoryid: number;

  @Column("date", { name: "STARTDATE" })
  startdate: Date;

  @Column("date", { name: "ENDDATE" })
  enddate: Date;

  @Column("int", { name: "EMPID" })
  empid: number;

  @Column("varchar", { name: "EMPCODE", length: 15 })
  empcode: string;

  @Column("int", { name: "LEAVECODE" })
  leavecode: number;

  @Column("numeric", { name: "BASICPAY", precision: 18, scale: 2 })
  basicpay: number;

  @Column("numeric", { name: "GROSSPAY", precision: 18, scale: 2 })
  grosspay: number;

  @Column("numeric", { name: "DEDUCTIONAMT", precision: 18, scale: 2 })
  deductionamt: number;

  @Column("numeric", { name: "NETPAY", precision: 18, scale: 2 })
  netpay: number;

  @Column("numeric", { name: "LEAVEDAYS", precision: 10, scale: 1 })
  leavedays: number;

  @Column("numeric", { name: "ELIGIBLEDAYS", precision: 10, scale: 1 })
  eligibledays: number;

  @Column("smallint", { name: "SETTLEMENTTYPE" })
  settlementtype: number;

  @Column("bit", { name: "ISACTIVE" })
  isactive: boolean;

  @Column("bit", { name: "ISREJOINED" })
  isrejoined: boolean;

  @Column("bit", { name: "ISACPOSTED" })
  isacposted: boolean;

  @Column("numeric", {
    name: "PRELEAVEBAL",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  preleavebal: number | null;

  @Column("date", { name: "PRELEAVEDATE", nullable: true })
  preleavedate: Date | null;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
