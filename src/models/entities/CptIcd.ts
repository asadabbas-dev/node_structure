import { Column, Entity } from "typeorm";

@Entity("CPT_ICD", { schema: "dbo" })
export class CptIcd {
  @Column("nvarchar", { name: "HCPCS_CODE", nullable: true, length: 6 })
  hcpcsCode: string | null;

  @Column("nvarchar", { name: "ICD10_CODE", nullable: true, length: 15 })
  icd10Code: string | null;

  @Column("nvarchar", { name: "NMD", nullable: true, length: 5 })
  nmd: string | null;

  @Column("nvarchar", { name: "LCD", nullable: true, length: 5 })
  lcd: string | null;

  @Column("nvarchar", { name: "LCDNonSupport", nullable: true, length: 15 })
  lcdNonSupport: string | null;

  @Column("nvarchar", { name: "ARTICLE", nullable: true, length: 3 })
  article: string | null;

  @Column("nvarchar", { name: "ARTNonSupport", nullable: true, length: 15 })
  artNonSupport: string | null;
}
