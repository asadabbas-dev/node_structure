import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_EMRPrescriptionOthers", ["chargeId"], { unique: true })
@Entity("EMRPrescriptionOthers", { schema: "dbo" })
export class EmrPrescriptionOthers {
  @Column("numeric", { name: "RegistrationId", precision: 18, scale: 0 })
  registrationId: number;

  @Column("varchar", { name: "PIN", length: 10 })
  pin: string;

  @PrimaryGeneratedColumn({
    type: "numeric",
    name: "ChargeId",
    precision: 18,
    scale: 0,
  })
  chargeId: number;

  @Column("varchar", { name: "ChargeCode", nullable: true, length: 500 })
  chargeCode: string | null;

  @Column("int", { name: "NoofTabs" })
  noofTabs: number;

  @Column("varchar", { name: "Unit", nullable: true, length: 10 })
  unit: string | null;

  @Column("int", { name: "Frequency" })
  frequency: number;

  @Column("int", { name: "Route" })
  route: number;

  @Column("int", { name: "Days" })
  days: number;

  @Column("varchar", { name: "Remarks", nullable: true, length: 500 })
  remarks: string | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
