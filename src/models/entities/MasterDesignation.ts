import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_MasterDesignation", ["designationId"], { unique: true })
@Entity("MasterDesignation", { schema: "dbo" })
export class MasterDesignation {
  @PrimaryGeneratedColumn({ type: "int", name: "DesignationId" })
  designationId: number;

  @Column("varchar", { name: "DesignationCode", length: 10 })
  designationCode: string;

  @Column("varchar", { name: "Designation", length: 100 })
  designation: string;

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
