import { Column, Entity, Index } from "typeorm";

@Index("PK_PatientProcessTime", ["registrationId", "pin"], { unique: true })
@Entity("PatientProcessTime", { schema: "dbo" })
export class PatientProcessTime {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 10 })
  pin: string;

  @Column("int", { name: "TokenNumber" })
  tokenNumber: number;

  @Column("datetime", { name: "AppointmentDate", nullable: true })
  appointmentDate: Date | null;

  @Column("datetime", { name: "RegistrationDate" })
  registrationDate: Date;

  @Column("varchar", { name: "DeptCode", length: 10 })
  deptCode: string;

  @Column("varchar", { name: "DoctorCode", length: 10 })
  doctorCode: string;

  @Column("datetime", { name: "VitalSign", nullable: true })
  vitalSign: Date | null;

  @Column("datetime", { name: "Provider", nullable: true })
  provider: Date | null;

  @Column("datetime", { name: "Checkout", nullable: true })
  checkout: Date | null;

  @Column("datetime", { name: "Billing", nullable: true })
  billing: Date | null;

  @Column("datetime", { name: "SampleCollection", nullable: true })
  sampleCollection: Date | null;

  @Column("datetime", { name: "Pharmacy", nullable: true })
  pharmacy: Date | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
