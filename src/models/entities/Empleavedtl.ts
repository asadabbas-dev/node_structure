import { Column, Entity, Index } from "typeorm";

@Index("PK_EMPLEAVEDTL", ["empid", "leavecode"], { unique: true })
@Entity("EMPLEAVEDTL", { schema: "dbo" })
export class Empleavedtl {
  @Column("int", { primary: true, name: "EMPID" })
  empid: number;

  @Column("int", { primary: true, name: "LEAVECODE" })
  leavecode: number;

  @Column("date", { name: "ACCRDATE" })
  accrdate: Date;

  @Column("date", { name: "ELGSTARTDATE" })
  elgstartdate: Date;

  @Column("numeric", { name: "LEAVEBAL", precision: 18, scale: 2 })
  leavebal: number;

  @Column("numeric", { name: "LEAVEAVAILED", precision: 18, scale: 2 })
  leaveavailed: number;

  @Column("numeric", { name: "ENCASH", precision: 18, scale: 2 })
  encash: number;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
