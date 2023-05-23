import { Column, Entity, Index } from "typeorm";

@Index("PK_GroupDiscount", ["groupId", "groupCode"], { unique: true })
@Entity("GroupDiscount", { schema: "dbo" })
export class GroupDiscount {
  @Column("int", { primary: true, name: "GroupId" })
  groupId: number;

  @Column("varchar", { primary: true, name: "GroupCode", length: 50 })
  groupCode: string;

  @Column("int", { name: "Discount" })
  discount: number;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
