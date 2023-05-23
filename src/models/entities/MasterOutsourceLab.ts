import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_MasterOutsourceLab", ["outsourceLabId"], { unique: true })
@Entity("MasterOutsourceLab", { schema: "dbo" })
export class MasterOutsourceLab {
  @PrimaryGeneratedColumn({ type: "int", name: "OutsourceLabId" })
  outsourceLabId: number;

  @Column("varchar", { name: "OutsourceLabName", length: 500 })
  outsourceLabName: string;

  @Column("varchar", { name: "ShortCode", length: 50 })
  shortCode: string;

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
