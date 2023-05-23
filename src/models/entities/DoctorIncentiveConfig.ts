import { Column, Entity, Index } from "typeorm";

@Index("PK_DoctorIncentiveConfig_1", ["doctorCode", "chargeId"], {
  unique: true,
})
@Entity("DoctorIncentiveConfig", { schema: "dbo" })
export class DoctorIncentiveConfig {
  @Column("varchar", { primary: true, name: "DoctorCode", length: 10 })
  doctorCode: string;

  @Column("numeric", {
    primary: true,
    name: "ChargeId",
    precision: 18,
    scale: 0,
  })
  chargeId: number;

  @Column("numeric", { name: "Breakeven", precision: 18, scale: 2 })
  breakeven: number;

  @Column("numeric", { name: "Incentive", precision: 18, scale: 2 })
  incentive: number;

  @Column("int", { name: "Rejection", default: () => "(0)" })
  rejection: number;

  @Column("int", { name: "EarlyPayment", default: () => "(0)" })
  earlyPayment: number;

  @Column("int", { name: "IncentiveType", default: () => "(0)" })
  incentiveType: number;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
