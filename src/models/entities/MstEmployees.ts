import { Column, Entity } from "typeorm";

@Entity("MstEmployees", { schema: "dbo" })
export class MstEmployees {
  @Column("varchar", { name: "EmployeeNumber", length: 10 })
  employeeNumber: string;

  @Column("image", { name: "EmployeePhoto", nullable: true })
  employeePhoto: Buffer | null;

  @Column("varchar", { name: "Saluation", length: 5 })
  saluation: string;

  @Column("varchar", { name: "EmployeeName", length: 150 })
  employeeName: string;

  @Column("varchar", { name: "DisplayName", length: 150 })
  displayName: string;

  @Column("varchar", { name: "Gender", length: 50 })
  gender: string;

  @Column("date", { name: "Dateofbirth" })
  dateofbirth: Date;

  @Column("date", { name: "Dateofjoin" })
  dateofjoin: Date;

  @Column("varchar", { name: "DepartmentCode", length: 10 })
  departmentCode: string;

  @Column("int", { name: "DesignationId" })
  designationId: number;

  @Column("int", { name: "ProfessionalGroup" })
  professionalGroup: number;

  @Column("varchar", { name: "Email", length: 50 })
  email: string;

  @Column("varchar", { name: "Mobile", length: 50 })
  mobile: string;

  @Column("int", { name: "NationalityId" })
  nationalityId: number;

  @Column("int", { name: "ReligionId" })
  religionId: number;

  @Column("varchar", { name: "MaritialStatus", length: 50 })
  maritialStatus: string;

  @Column("varchar", { name: "ReportingTo", length: 50 })
  reportingTo: string;

  @Column("int", { name: "Status" })
  status: number;

  @Column("varchar", { name: "ERContactPerson", length: 50 })
  erContactPerson: string;

  @Column("varchar", { name: "ERContactNo", length: 50 })
  erContactNo: string;

  @Column("numeric", { name: "BasicPay", precision: 18, scale: 2 })
  basicPay: number;

  @Column("numeric", { name: "GrossPay", precision: 18, scale: 2 })
  grossPay: number;

  @Column("numeric", { name: "NetPay", precision: 18, scale: 2 })
  netPay: number;

  @Column("numeric", { name: "JoinSalary", precision: 18, scale: 2 })
  joinSalary: number;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
