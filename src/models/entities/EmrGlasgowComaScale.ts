import { Column, Entity, Index } from "typeorm";

@Index("PK_EMRGlasgowComaScale", ["registrationId", "pin", "takenDateTime"], {
  unique: true,
})
@Entity("EMRGlasgowComaScale", { schema: "dbo" })
export class EmrGlasgowComaScale {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 10 })
  pin: string;

  @Column("datetime", { primary: true, name: "TakenDateTime" })
  takenDateTime: Date;

  @Column("int", { name: "EyeOpening" })
  eyeOpening: number;

  @Column("int", { name: "VerbalResponse" })
  verbalResponse: number;

  @Column("int", { name: "MotorResponse" })
  motorResponse: number;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
