import { Column, Entity, Index } from "typeorm";

@Index("PK_EMRPTAPTTChart", ["registrationId", "pin", "chartDate"], {
  unique: true,
})
@Entity("EMRPTAPTTChart", { schema: "dbo" })
export class EmrptapttChart {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 10 })
  pin: string;

  @Column("datetime", { primary: true, name: "ChartDate" })
  chartDate: Date;

  @Column("varchar", { name: "PT", nullable: true, length: 50 })
  pt: string | null;

  @Column("varchar", { name: "INR", nullable: true, length: 50 })
  inr: string | null;

  @Column("varchar", { name: "APTT", nullable: true, length: 50 })
  aptt: string | null;

  @Column("varchar", { name: "Warfarin", nullable: true, length: 50 })
  warfarin: string | null;

  @Column("varchar", { name: "Heparin", nullable: true, length: 50 })
  heparin: string | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate", nullable: true })
  createdDate: Date | null;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate", nullable: true })
  modifyDate: Date | null;
}
