import { Column, Entity } from "typeorm";

@Entity("FINREPORTDTL", { schema: "dbo" })
export class Finreportdtl {
  @Column("int", { name: "ReportId" })
  reportId: number;

  @Column("int", { name: "LineNumber" })
  lineNumber: number;

  @Column("varchar", { name: "AccountFrom", length: 10 })
  accountFrom: string;

  @Column("varchar", { name: "AccountTo", length: 10 })
  accountTo: string;

  @Column("bit", { name: "IsNegative" })
  isNegative: boolean;
}
