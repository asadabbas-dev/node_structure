import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_MasterRTFFormat", ["masterReportId"], { unique: true })
@Entity("MasterRTFFormat", { schema: "dbo" })
export class MasterRtfFormat {
  @PrimaryGeneratedColumn({ type: "int", name: "MasterReportID" })
  masterReportId: number;

  @Column("varchar", { name: "MasterReport" })
  masterReport: string;
}
