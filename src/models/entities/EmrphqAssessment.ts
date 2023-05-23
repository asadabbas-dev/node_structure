import { Column, Entity, Index } from "typeorm";

@Index("PK_EMRPHQAssessment", ["registrationId", "pin"], { unique: true })
@Entity("EMRPHQAssessment", { schema: "dbo" })
export class EmrphqAssessment {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 50 })
  pin: string;

  @Column("int", { name: "LittleInterest" })
  littleInterest: number;

  @Column("int", { name: "Hopeless" })
  hopeless: number;

  @Column("int", { name: "Sleepingtomuch" })
  sleepingtomuch: number;

  @Column("int", { name: "FeelingTired" })
  feelingTired: number;

  @Column("int", { name: "OverEating" })
  overEating: number;

  @Column("int", { name: "Feelingbad" })
  feelingbad: number;

  @Column("int", { name: "Concentraction" })
  concentraction: number;

  @Column("int", { name: "MovingSlow" })
  movingSlow: number;

  @Column("int", { name: "HurtingSelf" })
  hurtingSelf: number;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
