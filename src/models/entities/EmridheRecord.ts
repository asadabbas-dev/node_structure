import { Column, Entity, Index } from "typeorm";

@Index("PK_EMRIDHERecord", ["registrationId", "pin", "idheDate"], {
  unique: true,
})
@Entity("EMRIDHERecord", { schema: "dbo" })
export class EmridheRecord {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 10 })
  pin: string;

  @Column("datetime", { primary: true, name: "IDHEDate" })
  idheDate: Date;

  @Column("varchar", { name: "LNeeds", nullable: true, length: 50 })
  lNeeds: string | null;

  @Column("varchar", { name: "LBarriers", nullable: true, length: 50 })
  lBarriers: string | null;

  @Column("varchar", { name: "Instructor", nullable: true, length: 50 })
  instructor: string | null;

  @Column("varchar", { name: "Learner", nullable: true, length: 50 })
  learner: string | null;

  @Column("varchar", { name: "LMethods", nullable: true, length: 50 })
  lMethods: string | null;

  @Column("varchar", { name: "Evaluation", nullable: true, length: 50 })
  evaluation: string | null;

  @Column("varchar", { name: "Remarks", nullable: true, length: 100 })
  remarks: string | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate", nullable: true })
  createdDate: Date | null;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate", nullable: true })
  modifyDate: Date | null;
}
