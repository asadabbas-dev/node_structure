import { Column, Entity, Index } from "typeorm";

@Index("PK_ATTENDANCEEARNDTL", ["attendanceid", "earningsid"], { unique: true })
@Entity("ATTENDANCEEARNDTL", { schema: "dbo" })
export class Attendanceearndtl {
  @Column("int", { primary: true, name: "ATTENDANCEID" })
  attendanceid: number;

  @Column("int", { primary: true, name: "EARNINGSID" })
  earningsid: number;
}
