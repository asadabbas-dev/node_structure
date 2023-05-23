import { Column, Entity } from "typeorm";

@Entity("EMRGynaecHistory", { schema: "dbo" })
export class EmrGynaecHistory {
  @Column("numeric", { name: "RegistrationId", precision: 18, scale: 0 })
  registrationId: number;

  @Column("varchar", { name: "PIN", length: 10 })
  pin: string;

  @Column("int", { name: "Menarche", nullable: true })
  menarche: number | null;

  @Column("bit", { name: "MenopauseYN", nullable: true })
  menopauseYn: boolean | null;

  @Column("int", { name: "MenopauseAge", nullable: true })
  menopauseAge: number | null;

  @Column("int", { name: "MensesType", nullable: true })
  mensesType: number | null;

  @Column("varchar", { name: "MensesCycle", nullable: true, length: 5 })
  mensesCycle: string | null;

  @Column("int", { name: "Flow", nullable: true })
  flow: number | null;

  @Column("int", { name: "Dysmenorrhea", nullable: true })
  dysmenorrhea: number | null;

  @Column("bit", { name: "IntermenstrualBleedingYN", nullable: true })
  intermenstrualBleedingYn: boolean | null;

  @Column("bit", { name: "PostCoitalBleedingYN", nullable: true })
  postCoitalBleedingYn: boolean | null;

  @Column("bit", { name: "HPVVaccineYN", nullable: true })
  hpvVaccineYn: boolean | null;

  @Column("int", { name: "HPVVaccineNumber", nullable: true })
  hpvVaccineNumber: number | null;

  @Column("varchar", {
    name: "InfertilityHistory",
    nullable: true,
    length: 500,
  })
  infertilityHistory: string | null;

  @Column("int", { name: "Contraception", nullable: true })
  contraception: number | null;

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
