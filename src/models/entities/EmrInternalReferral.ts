import { Column, Entity, Index } from "typeorm";

@Index("PK_EMRInternalReferral_1", ["registrationId", "doctorCode"], {
  unique: true,
})
@Entity("EMRInternalReferral", { schema: "dbo" })
export class EmrInternalReferral {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "DoctorCode", length: 15 })
  doctorCode: string;

  @Column("varchar", { name: "PIN", length: 15 })
  pin: string;

  @Column("varchar", { name: "ReferredByDoctor", length: 15 })
  referredByDoctor: string;

  @Column("varchar", { name: "Remarks", nullable: true, length: 500 })
  remarks: string | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
