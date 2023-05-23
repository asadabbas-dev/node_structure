import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("MasterMenu", { schema: "dbo" })
export class MasterMenu {
  @PrimaryGeneratedColumn({ type: "int", name: "Menuid" })
  menuid: number;

  @Column("int", { name: "MainMenuid" })
  mainMenuid: number;

  @Column("varchar", { name: "Menuname", length: 50 })
  menuname: string;

  @Column("varchar", { name: "Formname", length: 50 })
  formname: string;

  @Column("bit", { name: "IsGroup" })
  isGroup: boolean;

  @Column("int", { name: "MenuOrder", default: () => "(0)" })
  menuOrder: number;

  @Column("bit", { name: "IsActive", default: () => "(0)" })
  isActive: boolean;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;
}
