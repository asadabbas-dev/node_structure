import { Column, Entity } from "typeorm";

@Entity("EMRNursingCarePlan", { schema: "dbo" })
export class EmrNursingCarePlan {
  @Column("numeric", { name: "RegistrationId", precision: 18, scale: 0 })
  registrationId: number;

  @Column("varchar", { name: "PIN", length: 10 })
  pin: string;

  @Column("datetime", { name: "Date" })
  date: Date;

  @Column("varchar", { name: "NursingNeeds", nullable: true, length: 100 })
  nursingNeeds: string | null;

  @Column("varchar", { name: "NursingActions", nullable: true, length: 100 })
  nursingActions: string | null;

  @Column("varchar", { name: "Evaluation", nullable: true, length: 100 })
  evaluation: string | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
