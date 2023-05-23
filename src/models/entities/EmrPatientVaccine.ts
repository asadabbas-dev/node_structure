import { Column, Entity, Index } from "typeorm";

@Index("PK_EMRPatientVaccine", ["registrationId", "pin", "vaccineCode"], {
  unique: true,
})
@Entity("EMRPatientVaccine", { schema: "dbo" })
export class EmrPatientVaccine {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 10 })
  pin: string;

  @Column("int", { primary: true, name: "VaccineCode" })
  vaccineCode: number;

  @Column("date", { name: "GivenDate", nullable: true })
  givenDate: Date | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
