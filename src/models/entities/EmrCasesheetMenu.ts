import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_EMRCasesheetMenu", ["menuId"], { unique: true })
@Entity("EMRCasesheetMenu", { schema: "dbo" })
export class EmrCasesheetMenu {
  @PrimaryGeneratedColumn({ type: "int", name: "MenuId" })
  menuId: number;

  @Column("varchar", { name: "MenuName", length: 50 })
  menuName: string;

  @Column("int", { name: "ScreenType" })
  screenType: number;

  @Column("varchar", { name: "FormName", length: 50 })
  formName: string;

  @Column("varchar", { name: "DepartmentCode", length: 50 })
  departmentCode: string;

  @Column("int", { name: "MenuOrder" })
  menuOrder: number;

  @Column("varchar", { name: "PatientType", length: 50 })
  patientType: string;

  @Column("bit", { name: "IsActive", default: () => "(0)" })
  isActive: boolean;
}
