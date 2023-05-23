import { Column, Entity } from "typeorm";

@Entity("EMRCTDG", { schema: "dbo" })
export class Emrctdg {
  @Column("varchar", { name: "ProblemCode", length: 50 })
  problemCode: string;

  @Column("varchar", { name: "MapRule", nullable: true, length: 1000 })
  mapRule: string | null;

  @Column("varchar", { name: "MapAdvice", nullable: true, length: 1000 })
  mapAdvice: string | null;

  @Column("varchar", { name: "DiagnosisCode", length: 50 })
  diagnosisCode: string;
}
