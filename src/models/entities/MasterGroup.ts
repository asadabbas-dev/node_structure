import { Column, Entity } from "typeorm";

@Entity("MasterGroup", { schema: "dbo" })
export class MasterGroup {
  @Column("float", { name: "GroupId", nullable: true, precision: 53 })
  groupId: number | null;

  @Column("nvarchar", { name: "GroupName", nullable: true })
  groupName: string | null;

  @Column("float", { name: "GroupDiscount", nullable: true, precision: 53 })
  groupDiscount: number | null;

  @Column("float", { name: "IsActive", nullable: true, precision: 53 })
  isActive: number | null;

  @Column("nvarchar", { name: "CreatedBy", nullable: true })
  createdBy: string | null;

  @Column("datetime", { name: "CreatedDate", nullable: true })
  createdDate: Date | null;

  @Column("nvarchar", { name: "ModifyBy", nullable: true })
  modifyBy: string | null;

  @Column("datetime", { name: "ModifyDate", nullable: true })
  modifyDate: Date | null;
}
