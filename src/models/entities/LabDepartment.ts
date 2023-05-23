import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_LabDepartment", ["departmentId"], { unique: true })
@Entity("LabDepartment", { schema: "dbo" })
export class LabDepartment {
  @PrimaryGeneratedColumn({ type: "int", name: "DepartmentId" })
  departmentId: number;

  @Column("varchar", { name: "DepartmentCode", length: 10 })
  departmentCode: string;

  @Column("varchar", { name: "DepartmentName", length: 50 })
  departmentName: string;

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
