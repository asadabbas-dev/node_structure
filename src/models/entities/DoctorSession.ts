import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_DoctorSession", ["sessionId"], { unique: true })
@Entity("DoctorSession", { schema: "dbo" })
export class DoctorSession {
  @PrimaryGeneratedColumn({ type: "int", name: "SessionId" })
  sessionId: number;

  @Column("varchar", { name: "DoctorCode", length: 10 })
  doctorCode: string;

  @Column("date", { name: "FromDate" })
  fromDate: Date;

  @Column("date", { name: "ToDate" })
  toDate: Date;

  @Column("time", { name: "Fromtime" })
  fromtime: Date;

  @Column("time", { name: "Totime" })
  totime: Date;

  @Column("time", { name: "SndFromTime", nullable: true })
  sndFromTime: Date | null;

  @Column("time", { name: "SndToTime", nullable: true })
  sndToTime: Date | null;

  @Column("int", { name: "NoofSession" })
  noofSession: number;

  @Column("int", { name: "SlotGap" })
  slotGap: number;

  @Column("bit", { name: "Sunday" })
  sunday: boolean;

  @Column("bit", { name: "Monday" })
  monday: boolean;

  @Column("bit", { name: "Tuesday" })
  tuesday: boolean;

  @Column("bit", { name: "Wednesday" })
  wednesday: boolean;

  @Column("bit", { name: "Thursday" })
  thursday: boolean;

  @Column("bit", { name: "Friday" })
  friday: boolean;

  @Column("bit", { name: "Saturday" })
  saturday: boolean;

  @Column("bit", { name: "Active" })
  active: boolean;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
