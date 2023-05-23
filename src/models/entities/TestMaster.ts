import { Column, Entity, Index } from "typeorm";

@Index("PK_TestMaster", ["testid"], { unique: true })
@Entity("TestMaster", { schema: "dbo" })
export class TestMaster {
  @Column("int", { primary: true, name: "Testid" })
  testid: number;

  @Column("varchar", { name: "TestName", length: 150 })
  testName: string;

  @Column("int", { name: "DepartmentId" })
  departmentId: number;

  @Column("int", { name: "SampleId" })
  sampleId: number;

  @Column("int", { name: "ResultTime" })
  resultTime: number;

  @Column("varchar", { name: "TestNotes", length: 500 })
  testNotes: string;

  @Column("int", { name: "OutSourced", default: () => "(0)" })
  outSourced: number;

  @Column("bit", { name: "IsActive" })
  isActive: boolean;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
