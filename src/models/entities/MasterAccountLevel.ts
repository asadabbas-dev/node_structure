import { Column, Entity } from "typeorm";

@Entity("MasterAccountLevel", { schema: "dbo" })
export class MasterAccountLevel {
  @Column("int", { name: "AccountLevel" })
  accountLevel: number;

  @Column("int", { name: "CodeLength", default: () => "(0)" })
  codeLength: number;

  @Column("int", { name: "Level1Width", nullable: true })
  level1Width: number | null;

  @Column("int", { name: "Level2Width", nullable: true })
  level2Width: number | null;

  @Column("int", { name: "Level3Width", nullable: true })
  level3Width: number | null;

  @Column("int", { name: "Level4Width", nullable: true })
  level4Width: number | null;

  @Column("int", { name: "Level5Width", nullable: true })
  level5Width: number | null;
}
