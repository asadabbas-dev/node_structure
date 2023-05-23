import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_EMRAnaesthesiaObservation",
  ["registrationId", "pin", "observationTime"],
  { unique: true }
)
@Entity("EMRAnaesthesiaObservation", { schema: "dbo" })
export class EmrAnaesthesiaObservation {
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

  @Column("int", { name: "IVInfusion", nullable: true })
  ivInfusion: number | null;

  @Column("int", { name: "HourlyInfused", nullable: true })
  hourlyInfused: number | null;

  @Column("int", { name: "TotalInfused", nullable: true })
  totalInfused: number | null;

  @Column("varchar", { name: "Urine", nullable: true, length: 10 })
  urine: string | null;

  @Column("varchar", { name: "Emesis", nullable: true, length: 10 })
  emesis: string | null;

  @Column("int", { name: "Total", nullable: true })
  total: number | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
