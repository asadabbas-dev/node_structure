import { Column, Entity, Index } from "typeorm";

@Index(
  "PK__EMRObste__B28A9C78EA4D7149",
  ["registrationId", "pin", "pregDurationWeeks"],
  { unique: true }
)
@Entity("EMRObstetricExam", { schema: "dbo" })
export class EmrObstetricExam {
  @Column("int", { primary: true, name: "RegistrationId" })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 10 })
  pin: string;

  @Column("int", { primary: true, name: "PregDurationWeeks" })
  pregDurationWeeks: number;

  @Column("numeric", { name: "FundusHeight", precision: 18, scale: 2 })
  fundusHeight: number;

  @Column("varchar", { name: "PresPosition", length: 50 })
  presPosition: string;

  @Column("varchar", { name: "Brim", length: 50 })
  brim: string;

  @Column("varchar", { name: "FHS", length: 50 })
  fhs: string;

  @Column("varchar", { name: "BP", length: 50 })
  bp: string;

  @Column("numeric", { name: "Weight", precision: 10, scale: 2 })
  weight: number;

  @Column("varchar", { name: "Oedema", length: 50 })
  oedema: string;

  @Column("date", { name: "NextVisitDate" })
  nextVisitDate: Date;

  @Column("varchar", { name: "Remarks", length: 100 })
  remarks: string;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
