import { Column, Entity } from "typeorm";

@Entity("EMRPrescription", { schema: "dbo" })
export class EmrPrescription {
  @Column("numeric", { name: "RegistrationId", precision: 18, scale: 0 })
  registrationId: number;

  @Column("varchar", { name: "PIN", length: 10 })
  pin: string;

  @Column("numeric", { name: "ChargeId", precision: 18, scale: 0 })
  chargeId: number;

  @Column("varchar", { name: "ChargeCode", nullable: true, length: 20 })
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

  @Column("bit", { name: "IsDelivered", default: () => "(0)" })
  isDelivered: boolean;

  @Column("int", { name: "Refill", default: () => "(0)" })
  refill: number;

  @Column("varchar", { name: "ApprovalNo", nullable: true, length: 50 })
  approvalNo: string | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
