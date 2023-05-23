import { Column, Entity, Index } from "typeorm";

@Index("PK_Results_1", ["requistionId", "testId", "displayId"], {
  unique: true,
})
@Entity("Results", { schema: "dbo" })
export class Results {
  @Column("numeric", {
    primary: true,
    name: "RequistionId",
    precision: 18,
    scale: 0,
  })
  requistionId: number;

  @Column("numeric", { primary: true, name: "TestId", precision: 18, scale: 0 })
  testId: number;

  @Column("numeric", {
    primary: true,
    name: "DisplayId",
    precision: 18,
    scale: 0,
  })
  displayId: number;

  @Column("varchar", { name: "Result" })
  result: string;

  @Column("varchar", { name: "Unit", nullable: true, length: 50 })
  unit: string | null;

  @Column("varchar", { name: "MinValue", nullable: true, length: 50 })
  minValue: string | null;

  @Column("varchar", { name: "MaxValue", nullable: true, length: 50 })
  maxValue: string | null;

  @Column("varchar", { name: "OtherValue", nullable: true, length: 500 })
  otherValue: string | null;

  @Column("bit", { name: "Technician", default: () => "(0)" })
  technician: boolean;

  @Column("bit", { name: "Pathologist", default: () => "(0)" })
  pathologist: boolean;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreateDate" })
  createDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
