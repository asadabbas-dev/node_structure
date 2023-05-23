import { Column, Entity } from "typeorm";

@Entity("EMRBloodTransfusion", { schema: "dbo" })
export class EmrBloodTransfusion {
  @Column("numeric", { name: "RegistrationId", precision: 18, scale: 0 })
  registrationId: number;

  @Column("varchar", { name: "PIN", length: 10 })
  pin: string;

  @Column("varchar", { name: "Component", nullable: true, length: 50 })
  component: string | null;

  @Column("varchar", { name: "Group", nullable: true, length: 5 })
  group: string | null;

  @Column("varchar", { name: "BagNo", nullable: true, length: 50 })
  bagNo: string | null;

  @Column("datetime", { name: "StartTime", nullable: true })
  startTime: Date | null;

  @Column("datetime", { name: "EndTime", nullable: true })
  endTime: Date | null;

  @Column("varchar", { name: "NurseSign", nullable: true, length: 50 })
  nurseSign: string | null;

  @Column("varchar", { name: "DoctorSign", nullable: true, length: 50 })
  doctorSign: string | null;

  @Column("int", { name: "TransfusionType", nullable: true })
  transfusionType: number | null;

  @Column("int", { name: "Temp", nullable: true })
  temp: number | null;

  @Column("int", { name: "Pulse", nullable: true })
  pulse: number | null;

  @Column("varchar", { name: "BP", nullable: true, length: 8 })
  bp: string | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate", nullable: true })
  createdDate: Date | null;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate", nullable: true })
  modifyDate: Date | null;
}
