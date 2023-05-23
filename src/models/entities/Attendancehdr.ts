import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK__tmp_ms_x__3BD6887362F4685A", ["attendanceno"], { unique: true })
@Entity("ATTENDANCEHDR", { schema: "dbo" })
export class Attendancehdr {
  @PrimaryGeneratedColumn({ type: "int", name: "ATTENDANCENO" })
  attendanceno: number;

  @Column("int", { name: "ATTMONTH" })
  attmonth: number;

  @Column("int", { name: "ATTYEAR" })
  attyear: number;

  @Column("int", { name: "EMPID" })
  empid: number;

  @Column("int", { name: "TOTALDAYS" })
  totaldays: number;

  @Column("numeric", { name: "WORKDAYS", precision: 18, scale: 1 })
  workdays: number;

  @Column("numeric", { name: "LEAVEDAYS", precision: 18, scale: 1 })
  leavedays: number;

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
