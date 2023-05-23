import { Column, Entity, Index } from "typeorm";

@Index("PK_EMRGastroscopy", ["registrationId", "pin"], { unique: true })
@Entity("EMRGastroscopy", { schema: "dbo" })
export class EmrGastroscopy {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 10 })
  pin: string;

  @Column("varchar", { name: "Indication", nullable: true, length: 200 })
  indication: string | null;

  @Column("varchar", { name: "Esophagus", nullable: true, length: 200 })
  esophagus: string | null;

  @Column("varchar", { name: "sphincter", nullable: true, length: 200 })
  sphincter: string | null;

  @Column("varchar", { name: "Stomach", nullable: true, length: 200 })
  stomach: string | null;

  @Column("varchar", { name: "Duodenum", nullable: true, length: 200 })
  duodenum: string | null;

  @Column("varchar", { name: "PODiagnosis", nullable: true, length: 200 })
  poDiagnosis: string | null;

  @Column("varchar", { name: "Specimens", nullable: true, length: 200 })
  specimens: string | null;

  @Column("image", { name: "GastroscopyImage", nullable: true })
  gastroscopyImage: Buffer | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
