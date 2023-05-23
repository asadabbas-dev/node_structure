import { Column, Entity, Index } from "typeorm";

@Index("PK_EMRClinicalOpiateWithdrawalScale", ["registrationId", "pin"], {
  unique: true,
})
@Entity("EMRClinicalOpiateWithdrawalScale", { schema: "dbo" })
export class EmrClinicalOpiateWithdrawalScale {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 50 })
  pin: string;

  @Column("int", { name: "RestingPulseRate" })
  restingPulseRate: number;

  @Column("int", { name: "GIUpset" })
  giUpset: number;

  @Column("int", { name: "Sweating" })
  sweating: number;

  @Column("int", { name: "Tremor" })
  tremor: number;

  @Column("int", { name: "Restlessness" })
  restlessness: number;

  @Column("int", { name: "Yawning" })
  yawning: number;

  @Column("int", { name: "Pupilsize" })
  pupilsize: number;

  @Column("int", { name: "Anxiety" })
  anxiety: number;

  @Column("int", { name: "Bone" })
  bone: number;

  @Column("int", { name: "GoosefleshSkin" })
  goosefleshSkin: number;

  @Column("int", { name: "Runnynose" })
  runnynose: number;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
