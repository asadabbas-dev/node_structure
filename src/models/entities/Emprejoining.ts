import { Column, Entity, Index } from "typeorm";

@Index("PK_EMPREJOINING", ["empid", "leavecode", "startdate"], { unique: true })
@Entity("EMPREJOINING", { schema: "dbo" })
export class Emprejoining {
  @Column("int", { primary: true, name: "EMPID" })
  empid: number;

  @Column("varchar", { name: "LEAVETRANSNO", length: 12 })
  leavetransno: string;

  @Column("int", { primary: true, name: "LEAVECODE" })
  leavecode: number;

  @Column("date", { primary: true, name: "STARTDATE" })
  startdate: Date;

  @Column("date", { name: "ENDDATE" })
  enddate: Date;

  @Column("numeric", { name: "NOOFDAYS", precision: 18, scale: 1 })
  noofdays: number;

  @Column("date", { name: "EXPREJOINDATE" })
  exprejoindate: Date;

  @Column("date", { name: "ACTREJOINDATE" })
  actrejoindate: Date;

  @Column("numeric", {
    name: "LOPDAYS",
    nullable: true,
    precision: 18,
    scale: 1,
  })
  lopdays: number | null;

  @Column("int", { name: "LOPLEAVECODE", nullable: true })
  lopleavecode: number | null;

  @Column("date", { name: "LOPSTART", nullable: true })
  lopstart: Date | null;

  @Column("date", { name: "LOPEND", nullable: true })
  lopend: Date | null;

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
