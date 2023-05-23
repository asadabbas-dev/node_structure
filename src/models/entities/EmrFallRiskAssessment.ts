import { Column, Entity } from "typeorm";

@Entity("EMRFallRiskAssessment", { schema: "dbo" })
export class EmrFallRiskAssessment {
  @Column("numeric", { name: "RegistrationId", precision: 18, scale: 0 })
  registrationId: number;

  @Column("varchar", { name: "PIN", length: 10 })
  pin: string;

  @Column("varchar", { name: "Description", nullable: true, length: 100 })
  description: string | null;

  @Column("int", { name: "MaxValue", nullable: true })
  maxValue: number | null;

  @Column("datetime", { name: "Date1", nullable: true })
  date1: Date | null;

  @Column("int", { name: "Score1", nullable: true })
  score1: number | null;

  @Column("datetime", { name: "Date2", nullable: true })
  date2: Date | null;

  @Column("int", { name: "Score2", nullable: true })
  score2: number | null;

  @Column("datetime", { name: "Date3", nullable: true })
  date3: Date | null;

  @Column("int", { name: "Score3", nullable: true })
  score3: number | null;

  @Column("datetime", { name: "Date4", nullable: true })
  date4: Date | null;

  @Column("int", { name: "Score4", nullable: true })
  score4: number | null;

  @Column("int", { name: "SortOrder", nullable: true })
  sortOrder: number | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
