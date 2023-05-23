import { Column, Entity } from "typeorm";

@Entity("GroupDetail", { schema: "dbo" })
export class GroupDetail {
  @Column("float", { name: "GroupId", nullable: true, precision: 53 })
  groupId: number | null;

  @Column("float", { name: "MenuId", nullable: true, precision: 53 })
  menuId: number | null;

  @Column("float", { name: "CheckState", nullable: true, precision: 53 })
  checkState: number | null;

  @Column("float", { name: "New", nullable: true, precision: 53 })
  new: number | null;

  @Column("float", { name: "Edit", nullable: true, precision: 53 })
  edit: number | null;

  @Column("float", { name: "Delete", nullable: true, precision: 53 })
  delete: number | null;

  @Column("float", { name: "Save", nullable: true, precision: 53 })
  save: number | null;

  @Column("float", { name: "Print", nullable: true, precision: 53 })
  print: number | null;
}
