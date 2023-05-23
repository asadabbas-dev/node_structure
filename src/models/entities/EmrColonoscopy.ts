import { Column, Entity, Index } from "typeorm";

@Index("PK_EMRColonoscopy", ["registrationId", "pin"], { unique: true })
@Entity("EMRColonoscopy", { schema: "dbo" })
export class EmrColonoscopy {
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

  @Column("varchar", { name: "Anus", nullable: true, length: 200 })
  anus: string | null;

  @Column("varchar", { name: "Rectum", nullable: true, length: 200 })
  rectum: string | null;

  @Column("varchar", { name: "Colon", nullable: true, length: 200 })
  colon: string | null;

  @Column("varchar", { name: "PODiagnosis", nullable: true, length: 200 })
  poDiagnosis: string | null;

  @Column("varchar", { name: "Specimens", nullable: true, length: 200 })
  specimens: string | null;

  @Column("image", { name: "ColonoscopyImage", nullable: true })
  colonoscopyImage: Buffer | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
