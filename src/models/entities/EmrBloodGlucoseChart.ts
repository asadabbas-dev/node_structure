import { Column, Entity, Index } from "typeorm";

@Index("PK_EMRBloodGlucoseChart", ["registrationId", "pin", "takenDate"], {
  unique: true,
})
@Entity("EMRBloodGlucoseChart", { schema: "dbo" })
export class EmrBloodGlucoseChart {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 10 })
  pin: string;

  @Column("datetime", { primary: true, name: "TakenDate" })
  takenDate: Date;

  @Column("varchar", { name: "FBG", nullable: true, length: 50 })
  fbg: string | null;

  @Column("char", { name: "TakenType", nullable: true, length: 1 })
  takenType: string | null;

  @Column("datetime", { name: "TakenTime", nullable: true })
  takenTime: Date | null;

  @Column("varchar", { name: "TakenDose", nullable: true, length: 50 })
  takenDose: string | null;

  @Column("varchar", { name: "TakenBy", nullable: true, length: 50 })
  takenBy: string | null;

  @Column("varchar", { name: "POBBG", nullable: true, length: 50 })
  pobbg: string | null;

  @Column("varchar", { name: "PRLBG", nullable: true, length: 50 })
  prlbg: string | null;

  @Column("varchar", { name: "POLBG", nullable: true, length: 50 })
  polbg: string | null;

  @Column("varchar", { name: "PRDBG", nullable: true, length: 50 })
  prdbg: string | null;

  @Column("varchar", { name: "PODBG", nullable: true, length: 50 })
  podbg: string | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate", nullable: true })
  createdDate: Date | null;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate", nullable: true })
  modifyDate: Date | null;
}
