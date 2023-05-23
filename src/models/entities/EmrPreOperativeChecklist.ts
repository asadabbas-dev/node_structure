import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_EMRPreOperativeChecklist",
  ["registrationId", "pin", "parameterId"],
  { unique: true }
)
@Entity("EMRPreOperativeChecklist", { schema: "dbo" })
export class EmrPreOperativeChecklist {
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

  @Column("bit", { name: "OTNurseYN", nullable: true })
  otNurseYn: boolean | null;

  @Column("varchar", { name: "WardNurse", nullable: true, length: 50 })
  wardNurse: string | null;

  @Column("varchar", { name: "OTNurse", nullable: true, length: 50 })
  otNurse: string | null;

  @Column("datetime", { name: "WardNurseDate", nullable: true })
  wardNurseDate: Date | null;

  @Column("datetime", { name: "OTNurseDate", nullable: true })
  otNurseDate: Date | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
