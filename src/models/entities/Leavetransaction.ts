import { Column, Entity, Index } from "typeorm";

@Index("PK__tmp_ms_x__34EE76F3C1EBBFF4", ["leavetransid"], { unique: true })
@Entity("LEAVETRANSACTION", { schema: "dbo" })
export class Leavetransaction {
  @Column("int", { primary: true, name: "LEAVETRANSID" })
  leavetransid: number;

  @Column("varchar", { name: "LEAVETRANSCODE", length: 5 })
  leavetranscode: string;

  @Column("varchar", { name: "LEAVETRANSNO", nullable: true, length: 12 })
  leavetransno: string | null;

  @Column("date", { name: "TRANSDATE" })
  transdate: Date;

  @Column("int", { name: "EMPID" })
  empid: number;

  @Column("int", { name: "LEAVECODE" })
  leavecode: number;

  @Column("numeric", { name: "ELIGIBLEDAYS", precision: 18, scale: 1 })
  eligibledays: number;

  @Column("date", { name: "STARTDATE" })
  startdate: Date;

  @Column("date", { name: "ENDDATE" })
  enddate: Date;

  @Column("numeric", { name: "NOOFDAYS", precision: 18, scale: 1 })
  noofdays: number;

  @Column("bit", { name: "ISREJOINED" })
  isrejoined: boolean;

  @Column("date", { name: "REJOINDATE", nullable: true })
  rejoindate: Date | null;

  @Column("char", { name: "AFFECTPAYCALC", length: 1 })
  affectpaycalc: string;

  @Column("bit", { name: "FIRSTAPPROVAL" })
  firstapproval: boolean;

  @Column("datetime", { name: "FAPPROVALDATE", nullable: true })
  fapprovaldate: Date | null;

  @Column("bit", { name: "SECONDAPPROVAL" })
  secondapproval: boolean;

  @Column("datetime", { name: "SAPPROVALDATE", nullable: true })
  sapprovaldate: Date | null;

  @Column("bit", { name: "FINALAPPROVAL" })
  finalapproval: boolean;

  @Column("datetime", { name: "LAPPROVALDATE", nullable: true })
  lapprovaldate: Date | null;

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
