import { Column, Entity } from "typeorm";

@Entity("SampleDetailMachine", { schema: "dbo" })
export class SampleDetailMachine {
  @Column("numeric", { name: "RequistionId", precision: 18, scale: 0 })
  requistionId: number;

  @Column("numeric", { name: "SampleId", precision: 18, scale: 0 })
  sampleId: number;

  @Column("varchar", { name: "SampleNumber", length: 15 })
  sampleNumber: string;

  @Column("numeric", { name: "InernalBillId", precision: 18, scale: 0 })
  inernalBillId: number;

  @Column("int", { name: "ChargeId" })
  chargeId: number;

  @Column("int", { name: "TestId" })
  testId: number;
}
