import { Column, Entity, Index } from "typeorm";

@Index("PK_EMROphthalmologyExam", ["registrationId", "pin"], { unique: true })
@Entity("EMROphthalmologyExam", { schema: "dbo" })
export class EmrOphthalmologyExam {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 10 })
  pin: string;

  @Column("int", { name: "SystemicIllness", nullable: true })
  systemicIllness: number | null;

  @Column("varchar", { name: "PrevDistRight", nullable: true, length: 30 })
  prevDistRight: string | null;

  @Column("varchar", { name: "PrevDistLeft", nullable: true, length: 30 })
  prevDistLeft: string | null;

  @Column("varchar", { name: "PrevNearRight", nullable: true, length: 30 })
  prevNearRight: string | null;

  @Column("varchar", { name: "PrevNearLeft", nullable: true, length: 30 })
  prevNearLeft: string | null;

  @Column("varchar", { name: "VAcuityDistRight", nullable: true, length: 30 })
  vAcuityDistRight: string | null;

  @Column("varchar", { name: "VAcuityDistLeft", nullable: true, length: 30 })
  vAcuityDistLeft: string | null;

  @Column("varchar", { name: "VAcuityNearRight", nullable: true, length: 30 })
  vAcuityNearRight: string | null;

  @Column("varchar", { name: "VAcuityNearLeft", nullable: true, length: 30 })
  vAcuityNearLeft: string | null;

  @Column("varchar", {
    name: "OrthopticEvaluation",
    nullable: true,
    length: 500,
  })
  orthopticEvaluation: string | null;

  @Column("varchar", { name: "Retinoscopy", nullable: true, length: 500 })
  retinoscopy: string | null;

  @Column("varchar", { name: "OrbitalAdnaxaeOD", nullable: true, length: 50 })
  orbitalAdnaxaeOd: string | null;

  @Column("varchar", { name: "OrbitalAdnaxaeOS", nullable: true, length: 50 })
  orbitalAdnaxaeOs: string | null;

  @Column("varchar", { name: "ConnjunctivaOD", nullable: true, length: 50 })
  connjunctivaOd: string | null;

  @Column("varchar", { name: "ConnjunctivaOS", nullable: true, length: 50 })
  connjunctivaOs: string | null;

  @Column("varchar", { name: "CorneaOD", nullable: true, length: 50 })
  corneaOd: string | null;

  @Column("varchar", { name: "CorneaOS", nullable: true, length: 50 })
  corneaOs: string | null;

  @Column("varchar", { name: "ACOD", nullable: true, length: 50 })
  acod: string | null;

  @Column("varchar", { name: "ACOS", nullable: true, length: 50 })
  acos: string | null;

  @Column("varchar", { name: "IrisOD", nullable: true, length: 50 })
  irisOd: string | null;

  @Column("varchar", { name: "IrisOS", nullable: true, length: 50 })
  irisOs: string | null;

  @Column("varchar", { name: "PupilOD", nullable: true, length: 50 })
  pupilOd: string | null;

  @Column("varchar", { name: "PupilOS", nullable: true, length: 50 })
  pupilOs: string | null;

  @Column("varchar", { name: "LensOD", nullable: true, length: 50 })
  lensOd: string | null;

  @Column("varchar", { name: "LensOS", nullable: true, length: 50 })
  lensOs: string | null;

  @Column("varchar", { name: "IOPOD", nullable: true, length: 50 })
  iopod: string | null;

  @Column("varchar", { name: "IOPOS", nullable: true, length: 50 })
  iopos: string | null;

  @Column("varchar", { name: "DuctOD", nullable: true, length: 50 })
  ductOd: string | null;

  @Column("varchar", { name: "DuctOS", nullable: true, length: 50 })
  ductOs: string | null;

  @Column("varchar", { name: "FundusExamOD", nullable: true, length: 50 })
  fundusExamOd: string | null;

  @Column("varchar", { name: "FundusExamOS", nullable: true, length: 50 })
  fundusExamOs: string | null;

  @Column("image", { name: "OrbitalImage", nullable: true })
  orbitalImage: Buffer | null;

  @Column("image", { name: "CorneaImage", nullable: true })
  corneaImage: Buffer | null;

  @Column("image", { name: "FundusImage", nullable: true })
  fundusImage: Buffer | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
