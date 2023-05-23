import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ApointmentsTheatre", { schema: "dbo" })
export class ApointmentsTheatre {
  @PrimaryGeneratedColumn({ type: "int", name: "AppointmentId" })
  appointmentId: number;

  @Column("varchar", { name: "PIN", length: 20 })
  pin: string;

  @Column("numeric", {
    name: "RegistrationId",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  registrationId: number;

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

  @Column("int", { name: "Surgery" })
  surgery: number;

  @Column("varchar", { name: "Anesthesiatype", length: 50 })
  anesthesiatype: string;

  @Column("varchar", { name: "ProcedureType", length: 50 })
  procedureType: string;

  @Column("varchar", { name: "Anesthetist", length: 50 })
  anesthetist: string;

  @Column("varchar", { name: "Surgeon", length: 50 })
  surgeon: string;

  @Column("varchar", { name: "Technician", length: 50 })
  technician: string;

  @Column("varchar", { name: "Description", length: 150 })
  description: string;

  @Column("int", { name: "Status" })
  status: number;

  @Column("int", { name: "Label" })
  label: number;

  @Column("bit", { name: "SMS", default: () => "(0)" })
  sms: boolean;

  @Column("int", { name: "TheatreId" })
  theatreId: number;

  @Column("bit", { name: "IsActive", default: () => "(0)" })
  isActive: boolean;

  @Column("int", { name: "AppointmentType", default: () => "(0)" })
  appointmentType: number;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
