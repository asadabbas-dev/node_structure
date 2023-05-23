import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Appointments", { schema: "dbo" })
export class Appointments {
  @PrimaryGeneratedColumn({ type: "int", name: "AppointmentId" })
  appointmentId: number;

  @Column("varchar", { name: "PIN", nullable: true, length: 20 })
  pin: string | null;

  @Column("varchar", { name: "DoctorCode", length: 20 })
  doctorCode: string;

  @Column("smalldatetime", { name: "StartDate" })
  startDate: Date;

  @Column("smalldatetime", { name: "EndDate" })
  endDate: Date;

  @Column("varchar", { name: "PatientName", length: 200 })
  patientName: string;

  @Column("numeric", { name: "Mobile", precision: 18, scale: 0 })
  mobile: number;

  @Column("varchar", { name: "Gender", length: 10 })
  gender: string;

  @Column("varchar", { name: "Description", length: 150 })
  description: string;

  @Column("int", { name: "Status" })
  status: number;

  @Column("int", { name: "Label" })
  label: number;

  @Column("bit", { name: "SMS", default: () => "(0)" })
  sms: boolean;

  @Column("numeric", {
    name: "RegistrationId",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  registrationId: number;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
