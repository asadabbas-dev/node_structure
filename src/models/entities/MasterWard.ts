import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_MasterWard", ["wardId"], { unique: true })
@Entity("MasterWard", { schema: "dbo" })
export class MasterWard {
  @PrimaryGeneratedColumn({ type: "int", name: "WardId" })
  wardId: number;

  @Column("varchar", { name: "WardCode", length: 10 })
  wardCode: string;

  @Column("varchar", { name: "WardName", length: 50 })
  wardName: string;

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
