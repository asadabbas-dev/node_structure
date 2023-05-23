import { Column, Entity } from "typeorm";

@Entity("Table_1", { schema: "dbo" })
export class Table_1 {
  @Column("varchar", { name: "Assessment", length: 500 })
  assessment: string;

  @Column("int", { name: "AssessmentValue" })
  assessmentValue: number;
}
