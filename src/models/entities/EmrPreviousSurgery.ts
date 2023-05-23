import { Column, Entity } from "typeorm";

@Entity("EMRPreviousSurgery", { schema: "dbo" })
export class EmrPreviousSurgery {
  @Column("numeric", { name: "RegistrationId", precision: 18, scale: 0 })
  registrationId: number;

  @Column("varchar", { name: "PIN", length: 10 })
  pin: string;

  @Column("date", { name: "SurgeryDate" })
  surgeryDate: Date;

  @Column("varchar", { name: "Surgery", length: 1000 })
  surgery: string;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
