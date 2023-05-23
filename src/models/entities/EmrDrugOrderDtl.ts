import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_EMRDrugOrderDTL_1", ["drugOrderId"], { unique: true })
@Entity("EMRDrugOrderDTL", { schema: "dbo" })
export class EmrDrugOrderDtl {
  @PrimaryGeneratedColumn({
    type: "numeric",
    name: "DrugOrderId",
    precision: 18,
    scale: 0,
  })
  drugOrderId: number;

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

  @Column("bit", { name: "Status" })
  status: boolean;

  @Column("varchar", { name: "Remarks", nullable: true })
  remarks: string | null;

  @Column("datetime", {
    name: "StatusDate",
    nullable: true,
    default: () => "(0)",
  })
  statusDate: Date | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
