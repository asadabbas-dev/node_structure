import { Column, Entity, Index } from "typeorm";

@Index("PK_EMRMedicalHistory", ["registrationId", "pin", "heading"], {
  unique: true,
})
@Entity("EMRMedicalHistory", { schema: "dbo" })
export class EmrMedicalHistory {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 10 })
  pin: string;

  @Column("int", { primary: true, name: "Heading" })
  heading: number;

  @Column("varchar", { name: "Duration", nullable: true, length: 50 })
  duration: string | null;

  @Column("int", { name: "DurationValue", nullable: true })
  durationValue: number | null;

  @Column("varchar", { name: "Description", nullable: true, length: 1000 })
  description: string | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
