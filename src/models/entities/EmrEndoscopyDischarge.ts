import { Column, Entity, Index } from "typeorm";

@Index("PK_EMREndoscopyDischarge", ["registrationId", "pin", "parameterId"], {
  unique: true,
})
@Entity("EMREndoscopyDischarge", { schema: "dbo" })
export class EmrEndoscopyDischarge {
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
