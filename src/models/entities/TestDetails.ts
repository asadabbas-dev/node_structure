import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_TestDetails", ["testParamId"], { unique: true })
@Entity("TestDetails", { schema: "dbo" })
export class TestDetails {
  @PrimaryGeneratedColumn({
    type: "numeric",
    name: "TestParamId",
    precision: 18,
    scale: 0,
  })
  testParamId: number;

  @Column("int", { name: "TestId" })
  testId: number;

  @Column("int", { name: "MachineName" })
  machineName: number;

  @Column("varchar", { name: "MachineParameter", length: 50 })
  machineParameter: string;

  @Column("varchar", { name: "DisplayText", length: 250 })
  displayText: string;

  @Column("varchar", { name: "DisplayType", length: 50 })
  displayType: string;

  @Column("int", { name: "TestOrder" })
  testOrder: number;

  @Column("varchar", { name: "Unit", length: 50 })
  unit: string;

  @Column("varchar", { name: "Remarks", nullable: true, length: 500 })
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
