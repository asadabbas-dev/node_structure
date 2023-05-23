import { Column, Entity, Index } from "typeorm";

@Index("PK_EMRPatientReferral", ["registrationId", "pin", "referralType"], {
  unique: true,
})
@Entity("EMRPatientReferral", { schema: "dbo" })
export class EmrPatientReferral {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 10 })
  pin: string;

  @Column("int", { primary: true, name: "ReferralType" })
  referralType: number;

  @Column("varchar", { name: "ReferredTo", length: 50 })
  referredTo: string;

  @Column("varchar", { name: "ReferralReport" })
  referralReport: string;

  @Column("numeric", {
    name: "ReferralRegistrationId",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  referralRegistrationId: number | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
