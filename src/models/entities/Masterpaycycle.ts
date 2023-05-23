import { Column, Entity, Index } from "typeorm";

@Index("PK_MASTERPAYCYCLE", ["paycycle", "categoryid", "paymonth", "payyear"], {
  unique: true,
})
@Entity("MASTERPAYCYCLE", { schema: "dbo" })
export class Masterpaycycle {
  @Column("int", { primary: true, name: "PAYCYCLE" })
  paycycle: number;

  @Column("varchar", { name: "DESCRIPTION", length: 50 })
  description: string;

  @Column("int", { primary: true, name: "CATEGORYID" })
  categoryid: number;

  @Column("int", { primary: true, name: "PAYMONTH" })
  paymonth: number;

  @Column("int", { primary: true, name: "PAYYEAR" })
  payyear: number;

  @Column("date", { name: "ATTENDANCEFROM" })
  attendancefrom: Date;

  @Column("date", { name: "ATTENDANCETO" })
  attendanceto: Date;

  @Column("date", { name: "OTFROM" })
  otfrom: Date;

  @Column("date", { name: "OTTO" })
  otto: Date;

  @Column("int", { name: "NOOFWORKDAYS" })
  noofworkdays: number;

  @Column("int", { name: "WORKPERDAY" })
  workperday: number;

  @Column("int", { name: "WORKPERMONTH" })
  workpermonth: number;

  @Column("int", { name: "PAYCALCID" })
  paycalcid: number;

  @Column("varchar", { name: "PAYSTATUS", length: 10 })
  paystatus: string;

  @Column("bit", { name: "GLINTERFACE" })
  glinterface: boolean;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
