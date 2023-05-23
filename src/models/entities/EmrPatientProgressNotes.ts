import { Column, Entity } from "typeorm";

@Entity("EMRPatientProgressNotes", { schema: "dbo" })
export class EmrPatientProgressNotes {
  @Column("numeric", { name: "RegistrationId", precision: 18, scale: 0 })
  registrationId: number;

  @Column("varchar", { name: "PIN", length: 10 })
  pin: string;

  @Column("datetime", { name: "NotesDate" })
  notesDate: Date;

  @Column("varchar", { name: "Notes" })
  notes: string;

  @Column("varchar", { name: "CreatedBy", length: 250 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 250 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
