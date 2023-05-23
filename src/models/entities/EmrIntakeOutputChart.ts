import { Column, Entity, Index } from "typeorm";

@Index("PK_EMRIntakeOutputChart", ["registrationId", "pin", "intakeDate"], {
  unique: true,
})
@Entity("EMRIntakeOutputChart", { schema: "dbo" })
export class EmrIntakeOutputChart {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 10 })
  pin: string;

  @Column("datetime", { primary: true, name: "IntakeDate" })
  intakeDate: Date;

  @Column("int", { name: "OralTube", nullable: true })
  oralTube: number | null;

  @Column("int", { name: "Intravenous", nullable: true })
  intravenous: number | null;

  @Column("int", { name: "TotalIntake", nullable: true })
  totalIntake: number | null;

  @Column("int", { name: "Urine", nullable: true })
  urine: number | null;

  @Column("int", { name: "Vomitus", nullable: true })
  vomitus: number | null;

  @Column("int", { name: "Drain", nullable: true })
  drain: number | null;

  @Column("int", { name: "TubeAspiration", nullable: true })
  tubeAspiration: number | null;

  @Column("int", { name: "Stool", nullable: true })
  stool: number | null;

  @Column("int", { name: "TotalOutput", nullable: true })
  totalOutput: number | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate", nullable: true })
  createdDate: Date | null;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate", nullable: true })
  modifyDate: Date | null;
}
