import { Column, Entity, Index } from "typeorm";

@Index("PK_EMRPositionChangeChart", ["registrationId", "pin", "chartDate"], {
  unique: true,
})
@Entity("EMRPositionChangeChart", { schema: "dbo" })
export class EmrPositionChangeChart {
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

  @Column("varchar", { name: "Supine", nullable: true, length: 50 })
  supine: string | null;

  @Column("varchar", { name: "LLateral", nullable: true, length: 50 })
  lLateral: string | null;

  @Column("varchar", { name: "RLateral", nullable: true, length: 50 })
  rLateral: string | null;

  @Column("varchar", { name: "Fowler", nullable: true, length: 50 })
  fowler: string | null;

  @Column("varchar", { name: "Remarks", nullable: true, length: 100 })
  remarks: string | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate", nullable: true })
  createdDate: Date | null;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate", nullable: true })
  modifyDate: Date | null;
}
