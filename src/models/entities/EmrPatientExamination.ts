import { Column, Entity, Index } from "typeorm";

@Index("PK_EMRPatientExamination", ["registrationId", "pin", "heading"], {
  unique: true,
})
@Entity("EMRPatientExamination", { schema: "dbo" })
export class EmrPatientExamination {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 10 })
  pin: string;

  @Column("int", { primary: true, name: "Heading" })
  heading: number;

  @Column("varchar", { name: "Examination", length: 500 })
  examination: string;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
