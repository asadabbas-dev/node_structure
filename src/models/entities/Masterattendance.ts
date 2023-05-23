import { Column, Entity, Index } from "typeorm";

@Index("PK_MASTERATTENDANCE", ["attendanceid"], { unique: true })
@Entity("MASTERATTENDANCE", { schema: "dbo" })
export class Masterattendance {
  @Column("int", { primary: true, name: "ATTENDANCEID" })
  attendanceid: number;

  @Column("varchar", { name: "ATTCODE", length: 10 })
  attcode: string;

  @Column("varchar", { name: "DESCRIPTION", length: 100 })
  description: string;

  @Column("int", { name: "WORKINGHRS" })
  workinghrs: number;

  @Column("bit", { name: "ISDEFAULTATT" })
  isdefaultatt: boolean;

  @Column("varchar", { name: "CREATEDBY", length: 50 })
  createdby: string;

  @Column("datetime", { name: "CREATEDDATE" })
  createddate: Date;

  @Column("varchar", { name: "MODIFYBY", length: 50 })
  modifyby: string;

  @Column("datetime", { name: "MODIFYDATE" })
  modifydate: Date;
}
