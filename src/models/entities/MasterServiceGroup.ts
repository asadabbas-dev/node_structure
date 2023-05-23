import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_MasterServiceGroup", ["groupId"], { unique: true })
@Entity("MasterServiceGroup", { schema: "dbo" })
export class MasterServiceGroup {
  @PrimaryGeneratedColumn({ type: "int", name: "GroupId" })
  groupId: number;

  @Column("varchar", { name: "GroupCode", length: 50 })
  groupCode: string;

  @Column("varchar", { name: "GroupName", length: 150 })
  groupName: string;

  @Column("varchar", { name: "AccountCode", nullable: true, length: 15 })
  accountCode: string | null;

  @Column("varchar", { name: "IPAccountCode", nullable: true, length: 15 })
  ipAccountCode: string | null;

  @Column("varchar", { name: "ERAccountCode", nullable: true, length: 15 })
  erAccountCode: string | null;

  @Column("bit", { name: "IsActive", default: () => "(0)" })
  isActive: boolean;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
