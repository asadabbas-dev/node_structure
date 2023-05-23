import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("MasterEmployee", { schema: "dbo" })
export class MasterEmployee {
  @PrimaryGeneratedColumn({ type: "int", name: "Empid" })
  empid: number;

  @Column("varchar", { name: "EmployeeNo", length: 10 })
  employeeNo: string;

  @Column("varchar", { name: "EmployeeName", length: 100 })
  employeeName: string;

  @Column("varchar", { name: "DeptCode", length: 10 })
  deptCode: string;

  @Column("varchar", { name: "DesignationCode", length: 10 })
  designationCode: string;

  @Column("varchar", { name: "Email", nullable: true, length: 50 })
  email: string | null;

  @Column("varchar", { name: "Groups", length: 10 })
  groups: string;

  @Column("date", { name: "DateofJoin" })
  dateofJoin: Date;

  @Column("date", { name: "Dateofbirth" })
  dateofbirth: Date;

  @Column("varchar", { name: "Gender", length: 1 })
  gender: string;

  @Column("varchar", { name: "Appointment", nullable: true, length: 1 })
  appointment: string | null;

  @Column("varchar", { name: "Admission", nullable: true, length: 1 })
  admission: string | null;

  @Column("varchar", { name: "Radiologist", nullable: true, length: 1 })
  radiologist: string | null;

  @Column("varchar", { name: "Surgeon", nullable: true, length: 1 })
  surgeon: string | null;

  @Column("varchar", { name: "Anathesist", nullable: true, length: 1 })
  anathesist: string | null;

  @Column("varchar", { name: "Pathologist", nullable: true, length: 1 })
  pathologist: string | null;

  @Column("varchar", { name: "LicenceNumber", nullable: true, length: 20 })
  licenceNumber: string | null;

  @Column("bit", { name: "Active", default: () => "(0)" })
  active: boolean;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;
}
