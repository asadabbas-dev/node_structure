import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_EMREndoscopyObservation",
  ["registrationId", "pin", "observationTime"],
  { unique: true }
)
@Entity("EMREndoscopyObservation", { schema: "dbo" })
export class EmrEndoscopyObservation {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 10 })
  pin: string;

  @Column("datetime", { primary: true, name: "ObservationTime" })
  observationTime: Date;

  @Column("varchar", { name: "BP", nullable: true, length: 8 })
  bp: string | null;

  @Column("int", { name: "Pulse", nullable: true })
  pulse: number | null;

  @Column("int", { name: "RespRate", nullable: true })
  respRate: number | null;

  @Column("int", { name: "Temperature", nullable: true })
  temperature: number | null;

  @Column("varchar", { name: "O2Sat", nullable: true, length: 10 })
  o2Sat: string | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
