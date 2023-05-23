import { Column, Entity, Index } from "typeorm";

@Index("PK_BlockPatients", ["pin"], { unique: true })
@Entity("BlockPatients", { schema: "dbo" })
export class BlockPatients {
  @Column("varchar", { primary: true, name: "PIN", length: 20 })
  pin: string;

  @Column("varchar", { name: "Reason" })
  reason: string;

  @Column("bit", { name: "IsActive" })
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
