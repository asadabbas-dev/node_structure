import { Column, Entity, Index } from "typeorm";

@Index("PK_EMRPatientComplaints", ["registrationId", "problemId"], {
  unique: true,
})
@Entity("EMRPatientComplaints", { schema: "dbo" })
export class EmrPatientComplaints {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { name: "PIN", length: 10 })
  pin: string;

  @Column("numeric", {
    primary: true,
    name: "ProblemId",
    precision: 20,
    scale: 0,
  })
  problemId: number;

  @Column("int", { name: "Period" })
  period: number;

  @Column("varchar", { name: "Duration", length: 10 })
  duration: string;

  @Column("varchar", { name: "ProblemHistory", nullable: true })
  problemHistory: string | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
