import { Column, Entity, Index } from "typeorm";

@Index("PK_FINANCIALYEAR", ["yearcode"], { unique: true })
@Entity("FINANCIALYEAR", { schema: "dbo" })
export class Financialyear {
  @Column("int", { primary: true, name: "YEARCODE" })
  yearcode: number;

  @Column("date", { name: "STARTDATE" })
  startdate: Date;

  @Column("date", { name: "ENDDATE" })
  enddate: Date;

  @Column("varchar", { name: "CURRENCYCODE", length: 3 })
  currencycode: string;

  @Column("numeric", { name: "EXCHANGERATE", precision: 18, scale: 2 })
  exchangerate: number;

  @Column("varchar", { name: "PLACCOUNTCODE", length: 10 })
  placcountcode: string;

  @Column("varchar", { name: "PLCOSTCODE", length: 10 })
  plcostcode: string;

  @Column("int", { name: "OPENPERIOD" })
  openperiod: number;

  @Column("bit", { name: "YEARENDJZ" })
  yearendjz: boolean;

  @Column("bit", { name: "DUEDATE" })
  duedate: boolean;

  @Column("bit", { name: "OPENINGBALANCE" })
  openingbalance: boolean;

  @Column("bit", { name: "ANNUALCLOSE" })
  annualclose: boolean;

  @Column("bit", { name: "JOB" })
  job: boolean;

  @Column("bit", { name: "MULTICURRENCY" })
  multicurrency: boolean;

  @Column("bit", { name: "ISCLOSED", nullable: true })
  isclosed: boolean | null;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
