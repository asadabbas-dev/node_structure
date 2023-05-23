import { Column, Entity, Index } from "typeorm";

@Index("PK_EMRGlassPrescription", ["registrationId", "pin"], { unique: true })
@Entity("EMRGlassPrescription", { schema: "dbo" })
export class EmrGlassPrescription {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 10 })
  pin: string;

  @Column("varchar", { name: "ShpDistLeft", nullable: true, length: 30 })
  shpDistLeft: string | null;

  @Column("varchar", { name: "ShpDistRight", nullable: true, length: 30 })
  shpDistRight: string | null;

  @Column("varchar", { name: "ShpNearLeft", nullable: true, length: 30 })
  shpNearLeft: string | null;

  @Column("varchar", { name: "ShpNearRight", nullable: true, length: 30 })
  shpNearRight: string | null;

  @Column("varchar", { name: "CylDistLeft", nullable: true, length: 30 })
  cylDistLeft: string | null;

  @Column("varchar", { name: "CylDistRight", nullable: true, length: 30 })
  cylDistRight: string | null;

  @Column("varchar", { name: "CylNearLeft", nullable: true, length: 30 })
  cylNearLeft: string | null;

  @Column("varchar", { name: "CylNearRight", nullable: true, length: 30 })
  cylNearRight: string | null;

  @Column("varchar", { name: "AxisDistLeft", nullable: true, length: 30 })
  axisDistLeft: string | null;

  @Column("varchar", { name: "AxisDistRight", nullable: true, length: 30 })
  axisDistRight: string | null;

  @Column("varchar", { name: "AxisNearLeft", nullable: true, length: 30 })
  axisNearLeft: string | null;

  @Column("varchar", { name: "AxisNearRight", nullable: true, length: 30 })
  axisNearRight: string | null;

  @Column("varchar", { name: "VAcuityDistLeft", nullable: true, length: 30 })
  vAcuityDistLeft: string | null;

  @Column("varchar", { name: "VAcuityDistRight", nullable: true, length: 30 })
  vAcuityDistRight: string | null;

  @Column("varchar", { name: "VAcuityNearLeft", nullable: true, length: 30 })
  vAcuityNearLeft: string | null;

  @Column("varchar", { name: "VAcuityNearRight", nullable: true, length: 30 })
  vAcuityNearRight: string | null;

  @Column("varchar", { name: "ADDLeft", nullable: true, length: 50 })
  addLeft: string | null;

  @Column("varchar", { name: "ADDRight", nullable: true, length: 50 })
  addRight: string | null;

  @Column("varchar", { name: "DECLeft", nullable: true, length: 50 })
  decLeft: string | null;

  @Column("varchar", { name: "DECRight", nullable: true, length: 50 })
  decRight: string | null;

  @Column("varchar", { name: "Form", nullable: true, length: 50 })
  form: string | null;

  @Column("varchar", { name: "Tint", nullable: true, length: 50 })
  tint: string | null;

  @Column("varchar", { name: "TypeofLens", nullable: true, length: 50 })
  typeofLens: string | null;

  @Column("varchar", { name: "SegDetails", nullable: true, length: 50 })
  segDetails: string | null;

  @Column("varchar", { name: "LensSize", nullable: true, length: 50 })
  lensSize: string | null;

  @Column("varchar", { name: "LensShape", nullable: true, length: 50 })
  lensShape: string | null;

  @Column("varchar", { name: "DistCentres", nullable: true, length: 50 })
  distCentres: string | null;

  @Column("varchar", { name: "NearCentres", nullable: true, length: 50 })
  nearCentres: string | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
