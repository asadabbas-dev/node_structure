import { Column, Entity } from "typeorm";

@Entity("EMRPediatricFluidChart", { schema: "dbo" })
export class EmrPediatricFluidChart {
  @Column("numeric", { name: "RegistrationId", precision: 18, scale: 0 })
  registrationId: number;

  @Column("varchar", { name: "PIN", length: 10 })
  pin: string;

  @Column("datetime", { name: "Date", nullable: true })
  date: Date | null;

  @Column("numeric", {
    name: "Weight",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  weight: number | null;

  @Column("int", { name: "Feed", nullable: true })
  feed: number | null;

  @Column("int", { name: "Amount", nullable: true })
  amount: number | null;

  @Column("int", { name: "BreastFeedTime", nullable: true })
  breastFeedTime: number | null;

  @Column("int", { name: "UCOAmount", nullable: true })
  ucoAmount: number | null;

  @Column("int", { name: "SCCOAmount", nullable: true })
  sccoAmount: number | null;

  @Column("int", { name: "VCCOAmount", nullable: true })
  vccoAmount: number | null;

  @Column("varchar", { name: "Other", nullable: true, length: 50 })
  other: string | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate", nullable: true })
  createdDate: Date | null;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate", nullable: true })
  modifyDate: Date | null;
}
