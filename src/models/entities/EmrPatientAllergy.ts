import { Column, Entity } from "typeorm";

@Entity("EMRPatientAllergy", { schema: "dbo" })
export class EmrPatientAllergy {
  @Column("numeric", { name: "RegistrationId", precision: 18, scale: 0 })
  registrationId: number;

  @Column("varchar", { name: "PIN", length: 10 })
  pin: string;

  @Column("int", { name: "AllergyType" })
  allergyType: number;

  @Column("int", { name: "Allergy" })
  allergy: number;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
