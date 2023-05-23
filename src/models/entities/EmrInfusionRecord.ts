import { Column, Entity, Index } from "typeorm";

@Index("PK_EMRInfusionRecord", ["registrationId", "pin", "fluidType"], {
  unique: true,
})
@Entity("EMRInfusionRecord", { schema: "dbo" })
export class EmrInfusionRecord {
  @Column("numeric", {
    primary: true,
    name: "RegistrationId",
    precision: 18,
    scale: 0,
  })
  registrationId: number;

  @Column("varchar", { primary: true, name: "PIN", length: 10 })
  pin: string;

  @Column("numeric", {
    primary: true,
    name: "FluidType",
    precision: 18,
    scale: 0,
  })
  fluidType: number;

  @Column("numeric", {
    name: "Additive",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  additive: number | null;

  @Column("int", { name: "Volume", nullable: true })
  volume: number | null;

  @Column("numeric", { name: "Rate", nullable: true, precision: 18, scale: 2 })
  rate: number | null;

  @Column("varchar", { name: "OtherInstruction", nullable: true, length: 100 })
  otherInstruction: string | null;

  @Column("varchar", { name: "Doctor", nullable: true, length: 50 })
  doctor: string | null;

  @Column("datetime", { name: "DoctorDate", nullable: true })
  doctorDate: Date | null;

  @Column("varchar", { name: "Nurse", nullable: true, length: 50 })
  nurse: string | null;

  @Column("varchar", { name: "Witness", nullable: true, length: 50 })
  witness: string | null;

  @Column("datetime", { name: "NurseDate", nullable: true })
  nurseDate: Date | null;

  @Column("numeric", {
    name: "TotalAmount",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  totalAmount: number | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate", nullable: true })
  createdDate: Date | null;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate", nullable: true })
  modifyDate: Date | null;
}
