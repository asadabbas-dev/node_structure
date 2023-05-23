import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_EMROralExamination",
  ["registrationId", "pin", "oralExamType", "complaintId"],
  { unique: true }
)
@Entity("EMROralExamination", { schema: "dbo" })
export class EmrOralExamination {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 10 })
  pin: string;

  @Column("char", { primary: true, name: "OralExamType", length: 1 })
  oralExamType: string;

  @Column("int", { primary: true, name: "ComplaintId" })
  complaintId: number;

  @Column("varchar", { name: "TeethNo", length: 100 })
  teethNo: string;

  @Column("varchar", { name: "Comments", nullable: true, length: 200 })
  comments: string | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
