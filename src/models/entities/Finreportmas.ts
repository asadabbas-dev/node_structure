import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_FINREPORTMAS", ["reportId"], { unique: true })
@Entity("FINREPORTMAS", { schema: "dbo" })
export class Finreportmas {
  @PrimaryGeneratedColumn({ type: "int", name: "ReportId" })
  reportId: number;

  @Column("varchar", { name: "ReportName", length: 50 })
  reportName: string;
}
