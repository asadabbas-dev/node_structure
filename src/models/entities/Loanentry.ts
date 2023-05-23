import { Column, Entity, Index } from "typeorm";

@Index("PK__tmp_ms_x__AEC1A2D8E9A9A785", ["refno"], { unique: true })
@Entity("LOANENTRY", { schema: "dbo" })
export class Loanentry {
  @Column("int", { primary: true, name: "REFNO" })
  refno: number;

  @Column("date", { name: "REFDATE" })
  refdate: Date;

  @Column("int", { name: "EMPID" })
  empid: number;

  @Column("int", { name: "LOANTYPEID" })
  loantypeid: number;

  @Column("numeric", { name: "LOANAMT", precision: 18, scale: 2 })
  loanamt: number;

  @Column("numeric", { name: "INSTALAMT", precision: 18, scale: 2 })
  instalamt: number;

  @Column("int", { name: "NOOFINSTAL" })
  noofinstal: number;

  @Column("date", { name: "RECOVERYSTART" })
  recoverystart: Date;

  @Column("date", { name: "RECOVERYEND" })
  recoveryend: Date;

  @Column("numeric", {
    name: "LASTINSTALAMT",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  lastinstalamt: number | null;

  @Column("numeric", {
    name: "RECOVEREDAMT",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  recoveredamt: number | null;

  @Column("bit", { name: "ISCLOSED" })
  isclosed: boolean;

  @Column("numeric", {
    name: "CLOSEDAMT",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  closedamt: number | null;

  @Column("varchar", { name: "CLOSEDREASON", nullable: true, length: 100 })
  closedreason: string | null;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
