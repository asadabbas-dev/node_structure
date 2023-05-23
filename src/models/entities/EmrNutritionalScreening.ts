import { Column, Entity, Index } from "typeorm";

@Index("PK_EMRNutritionalScreening", ["registrationId", "pin"], {
  unique: true,
})
@Entity("EMRNutritionalScreening", { schema: "dbo" })
export class EmrNutritionalScreening {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 10 })
  pin: string;

  @Column("numeric", {
    name: "IdealWt",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  idealWt: number | null;

  @Column("bit", { name: "OdemaPresence", nullable: true })
  odemaPresence: boolean | null;

  @Column("varchar", { name: "Haemoglobin", nullable: true, length: 20 })
  haemoglobin: string | null;

  @Column("varchar", { name: "Cholesterol", nullable: true, length: 20 })
  cholesterol: string | null;

  @Column("varchar", { name: "BloodSugar", nullable: true, length: 20 })
  bloodSugar: string | null;

  @Column("varchar", { name: "OtherRemarks", nullable: true, length: 200 })
  otherRemarks: string | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
