import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_EMREndoscopyPreChecklist",
  ["registrationId", "pin", "parameterId"],
  { unique: true }
)
@Entity("EMREndoscopyPreChecklist", { schema: "dbo" })
export class EmrEndoscopyPreChecklist {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 10 })
  pin: string;

  @Column("int", { primary: true, name: "ParameterId" })
  parameterId: number;

  @Column("bit", { name: "WardNurseYN", nullable: true })
  wardNurseYn: boolean | null;

  @Column("bit", { name: "EndoscopyNurseYN", nullable: true })
  endoscopyNurseYn: boolean | null;

  @Column("varchar", { name: "WardNurse", nullable: true, length: 50 })
  wardNurse: string | null;

  @Column("varchar", { name: "EndoscopyNurse", nullable: true, length: 50 })
  endoscopyNurse: string | null;

  @Column("datetime", { name: "WardNurseDate", nullable: true })
  wardNurseDate: Date | null;

  @Column("datetime", { name: "EndoscopyNurseDate", nullable: true })
  endoscopyNurseDate: Date | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
