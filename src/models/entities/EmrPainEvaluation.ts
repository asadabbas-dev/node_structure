import { Column, Entity, Index } from "typeorm";

@Index("PK_EMRPainEvaluation", ["registrationId", "pin"], { unique: true })
@Entity("EMRPainEvaluation", { schema: "dbo" })
export class EmrPainEvaluation {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 10 })
  pin: string;

  @Column("image", { name: "BodyChartFront", nullable: true })
  bodyChartFront: Buffer | null;

  @Column("image", { name: "BodyChartBack", nullable: true })
  bodyChartBack: Buffer | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
