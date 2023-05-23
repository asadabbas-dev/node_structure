import { Column, Entity, Index } from "typeorm";

@Index("ix_Code", ["shortDescription"], {})
@Index("IX_MasterDiagnosis_ShortCode", ["shortDescription"], {})
@Index("PK_MasterDiagnosis", ["icdCode"], { unique: true })
@Entity("MasterDiagnosis", { schema: "dbo" })
export class MasterDiagnosis {
  @Column("varchar", { primary: true, name: "ICDCode", length: 20 })
  icdCode: string;

  @Column("varchar", { name: "ShortDescription", length: 100 })
  shortDescription: string;

  @Column("varchar", { name: "LongDescription", length: 250 })
  longDescription: string;
}
