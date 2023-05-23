import { Column, Entity, Index } from "typeorm";

@Index("PK_EMREndoscopyTimeout", ["registrationId", "pin", "parameterId"], {
  unique: true,
})
@Entity("EMREndoscopyTimeout", { schema: "dbo" })
export class EmrEndoscopyTimeout {
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

  @Column("smallint", { name: "Status", nullable: true })
  status: number | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
