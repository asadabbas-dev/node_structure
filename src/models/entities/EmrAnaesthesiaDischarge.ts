import { Column, Entity, Index } from "typeorm";

@Index("PK_EMRAnaesthesiaDischarge", ["registrationId", "pin", "parameterId"], {
  unique: true,
})
@Entity("EMRAnaesthesiaDischarge", { schema: "dbo" })
export class EmrAnaesthesiaDischarge {
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

  @Column("int", { name: "EntryParamId", nullable: true })
  entryParamId: number | null;

  @Column("int", { name: "DischargeParamId", nullable: true })
  dischargeParamId: number | null;

  @Column("int", { name: "EntryScore", nullable: true })
  entryScore: number | null;

  @Column("int", { name: "DischargeScore", nullable: true })
  dischargeScore: number | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
