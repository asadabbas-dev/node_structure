import { Column, Entity, Index } from "typeorm";

@Index("PK_EMREndoscopyVitalSign", ["registrationId", "pin", "time"], {
  unique: true,
})
@Entity("EMREndoscopyVitalSign", { schema: "dbo" })
export class EmrEndoscopyVitalSign {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 10 })
  pin: string;

  @Column("datetime", { primary: true, name: "Time" })
  time: Date;

  @Column("int", { name: "HR", nullable: true })
  hr: number | null;

  @Column("int", { name: "RR", nullable: true })
  rr: number | null;

  @Column("varchar", { name: "BP", nullable: true, length: 8 })
  bp: string | null;

  @Column("int", { name: "SPO2", nullable: true })
  spo2: number | null;

  @Column("int", { name: "PainScore", nullable: true })
  painScore: number | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
