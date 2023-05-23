import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_TestReferenceRange", ["testReferenceId"], { unique: true })
@Entity("TestReferenceRange", { schema: "dbo" })
export class TestReferenceRange {
  @PrimaryGeneratedColumn({
    type: "numeric",
    name: "TestReferenceId",
    precision: 18,
    scale: 0,
  })
  testReferenceId: number;

  @Column("int", { name: "TestId" })
  testId: number;

  @Column("numeric", { name: "TestOrder", precision: 18, scale: 0 })
  testOrder: number;

  @Column("varchar", { name: "Gender", length: 10 })
  gender: string;

  @Column("varchar", { name: "Age", length: 10 })
  age: string;

  @Column("varchar", { name: "AgeFrom", length: 10 })
  ageFrom: string;

  @Column("varchar", { name: "AgeTo", length: 10 })
  ageTo: string;

  @Column("varchar", { name: "MinValue", nullable: true, length: 50 })
  minValue: string | null;

  @Column("varchar", { name: "MaxValue", nullable: true, length: 50 })
  maxValue: string | null;

  @Column("varchar", { name: "OtherValue", nullable: true, length: 500 })
  otherValue: string | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
