import { Column, Entity, Index } from "typeorm";

@Index("PK_EMRDrugAbuseAssessment", ["registrationId", "pin"], { unique: true })
@Entity("EMRDrugAbuseAssessment", { schema: "dbo" })
export class EmrDrugAbuseAssessment {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 50 })
  pin: string;

  @Column("int", { name: "Difficultycontrolling" })
  difficultycontrolling: number;

  @Column("int", { name: "Unsuccessfulattempts" })
  unsuccessfulattempts: number;

  @Column("int", { name: "Significantamountoftime" })
  significantamountoftime: number;

  @Column("int", { name: "Negativeconsequences" })
  negativeconsequences: number;

  @Column("int", { name: "Negativeconsequences1" })
  negativeconsequences1: number;

  @Column("int", { name: "Continuedtouse" })
  continuedtouse: number;

  @Column("int", { name: "Putoffthings" })
  putoffthings: number;

  @Column("int", { name: "Cravings" })
  cravings: number;

  @Column("int", { name: "Tolerance" })
  tolerance: number;

  @Column("int", { name: "Withdrawalsymptoms" })
  withdrawalsymptoms: number;

  @Column("int", { name: "Dangeroussituations" })
  dangeroussituations: number;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
