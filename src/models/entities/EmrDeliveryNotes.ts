import { Column, Entity, Index } from "typeorm";

@Index("PK_EMRDeliveryNotes", ["registrationId", "pin"], { unique: true })
@Entity("EMRDeliveryNotes", { schema: "dbo" })
export class EmrDeliveryNotes {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 10 })
  pin: string;

  @Column("datetime", { name: "CommenceDate", nullable: true })
  commenceDate: Date | null;

  @Column("datetime", { name: "BabyBornDate", nullable: true })
  babyBornDate: Date | null;

  @Column("datetime", { name: "PlacentaDate", nullable: true })
  placentaDate: Date | null;

  @Column("int", { name: "DelType", nullable: true })
  delType: number | null;

  @Column("varchar", { name: "ConductedBy", nullable: true, length: 50 })
  conductedBy: string | null;

  @Column("varchar", { name: "Assistant", nullable: true, length: 50 })
  assistant: string | null;

  @Column("varchar", { name: "Perineum", nullable: true, length: 50 })
  perineum: string | null;

  @Column("int", { name: "Temp", nullable: true })
  temp: number | null;

  @Column("int", { name: "Pulse", nullable: true })
  pulse: number | null;

  @Column("int", { name: "RespRate", nullable: true })
  respRate: number | null;

  @Column("varchar", { name: "BP", nullable: true, length: 8 })
  bp: string | null;

  @Column("char", { name: "BabySex", nullable: true, length: 1 })
  babySex: string | null;

  @Column("numeric", {
    name: "BabyWeight",
    nullable: true,
    precision: 18,
    scale: 3,
  })
  babyWeight: number | null;

  @Column("int", { name: "APGAR", nullable: true })
  apgar: number | null;

  @Column("varchar", { name: "AfterDelCondition", nullable: true, length: 50 })
  afterDelCondition: string | null;

  @Column("varchar", { name: "Abnormalities", nullable: true, length: 50 })
  abnormalities: string | null;

  @Column("varchar", { name: "BabyProgress", nullable: true, length: 50 })
  babyProgress: string | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
