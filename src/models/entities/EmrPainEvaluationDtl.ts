import { Column, Entity, Index } from "typeorm";

@Index("PK_EMRPainEvaluationDTL", ["registrationId", "pin", "parameterId"], {
  unique: true,
})
@Entity("EMRPainEvaluationDTL", { schema: "dbo" })
export class EmrPainEvaluationDtl {
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

  @Column("varchar", { name: "RightRoom", nullable: true, length: 20 })
  rightRoom: string | null;

  @Column("varchar", { name: "RightStrength", nullable: true, length: 20 })
  rightStrength: string | null;

  @Column("varchar", { name: "LeftRoom", nullable: true, length: 20 })
  leftRoom: string | null;

  @Column("varchar", { name: "LeftStrength", nullable: true, length: 20 })
  leftStrength: string | null;

  @Column("varchar", { name: "Remarks", nullable: true, length: 100 })
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
