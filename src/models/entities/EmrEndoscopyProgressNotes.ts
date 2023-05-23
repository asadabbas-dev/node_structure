import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_EMREndoscopyProgressNotes",
  ["registrationId", "pin", "progressTime"],
  { unique: true }
)
@Entity("EMREndoscopyProgressNotes", { schema: "dbo" })
export class EmrEndoscopyProgressNotes {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 10 })
  pin: string;

  @Column("datetime", { primary: true, name: "ProgressTime" })
  progressTime: Date;

  @Column("varchar", { name: "Notes", nullable: true, length: 200 })
  notes: string | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
