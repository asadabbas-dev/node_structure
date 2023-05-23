import { Column, Entity, Index } from "typeorm";

@Index(
  "PK_EMRNutritionalScreeningDTL",
  ["registrationId", "pin", "parameterId"],
  { unique: true }
)
@Entity("EMRNutritionalScreeningDTL", { schema: "dbo" })
export class EmrNutritionalScreeningDtl {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 10 })
  pin: string;

  @Column("char", { name: "NScreeningFor", nullable: true, length: 1 })
  nScreeningFor: string | null;

  @Column("int", { primary: true, name: "ParameterId" })
  parameterId: number;

  @Column("bit", { name: "Status", nullable: true })
  status: boolean | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
