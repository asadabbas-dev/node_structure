import { Column, Entity, Index } from "typeorm";

@Index("PK_TestPanel", ["panelId", "testId"], { unique: true })
@Entity("TestPanel", { schema: "dbo" })
export class TestPanel {
  @Column("int", { primary: true, name: "PanelId" })
  panelId: number;

  @Column("int", { primary: true, name: "TestId" })
  testId: number;

  @Column("int", { name: "TestOrder", default: () => "(0)" })
  testOrder: number;
}
