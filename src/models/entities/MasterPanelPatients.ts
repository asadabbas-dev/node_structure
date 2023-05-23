import { Column, Entity, Index } from "typeorm";

@Index("PK_MasterPanelPatients", ["pin", "panelId"], { unique: true })
@Entity("MasterPanelPatients", { schema: "dbo" })
export class MasterPanelPatients {
  @Column("varchar", { primary: true, name: "PIN", length: 20 })
  pin: string;

  @Column("int", { primary: true, name: "PanelId" })
  panelId: number;
}
