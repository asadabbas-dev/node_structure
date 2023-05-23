import { Column, Entity, Index } from "typeorm";

@Index("PK_EMRDischargePlanning", ["registrationId", "pin", "dischargeId"], {
  unique: true,
})
@Entity("EMRDischargePlanning", { schema: "dbo" })
export class EmrDischargePlanning {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 10 })
  pin: string;

  @Column("int", { primary: true, name: "DischargeId" })
  dischargeId: number;

  @Column("bit", { name: "Status" })
  status: boolean;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
