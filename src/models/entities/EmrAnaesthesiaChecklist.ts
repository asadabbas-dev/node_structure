import { Column, Entity, Index } from "typeorm";

@Index("PK_EMRAnaesthesiaChecklist", ["registrationId", "pin"], {
  unique: true,
})
@Entity("EMRAnaesthesiaChecklist", { schema: "dbo" })
export class EmrAnaesthesiaChecklist {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 10 })
  pin: string;

  @Column("datetime", { name: "Date", nullable: true })
  date: Date | null;

  @Column("int", { name: "PulseRate", nullable: true })
  pulseRate: number | null;

  @Column("varchar", { name: "BP", nullable: true, length: 8 })
  bp: string | null;

  @Column("int", { name: "Temperature", nullable: true })
  temperature: number | null;

  @Column("int", { name: "Weight", nullable: true })
  weight: number | null;

  @Column("int", { name: "Height", nullable: true })
  height: number | null;

  @Column("int", { name: "RespRate", nullable: true })
  respRate: number | null;

  @Column("int", { name: "MallampatiScore", nullable: true })
  mallampatiScore: number | null;

  @Column("varchar", { name: "Teeth", nullable: true, length: 20 })
  teeth: string | null;

  @Column("varchar", { name: "Spine", nullable: true, length: 20 })
  spine: string | null;

  @Column("int", { name: "NeckMovement", nullable: true })
  neckMovement: number | null;

  @Column("varchar", { name: "MouthOpen", nullable: true, length: 20 })
  mouthOpen: string | null;

  @Column("varchar", { name: "TMJointMobility", nullable: true, length: 20 })
  tmJointMobility: string | null;

  @Column("int", { name: "ThyramentalDist", nullable: true })
  thyramentalDist: number | null;

  @Column("varchar", { name: "Others", nullable: true, length: 20 })
  others: string | null;

  @Column("int", { name: "ASAGrade", nullable: true })
  asaGrade: number | null;

  @Column("int", { name: "AnaethesiaType", nullable: true })
  anaethesiaType: number | null;

  @Column("datetime", { name: "ShiftingWardTime", nullable: true })
  shiftingWardTime: Date | null;

  @Column("varchar", { name: "PreOPInstruction", nullable: true, length: 200 })
  preOpInstruction: string | null;

  @Column("varchar", { name: "PostOPInstruction", nullable: true, length: 200 })
  postOpInstruction: string | null;

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
