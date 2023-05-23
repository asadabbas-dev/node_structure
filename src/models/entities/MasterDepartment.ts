import { Column, Entity } from "typeorm";

@Entity("MasterDepartment", { schema: "dbo" })
export class MasterDepartment {
  @Column("varchar", { name: "DeptCode", length: 10 })
  deptCode: string;

  @Column("varchar", { name: "DeptName", length: 100 })
  deptName: string;

  @Column("varchar", { name: "FormName", nullable: true, length: 50 })
  formName: string | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;
}
