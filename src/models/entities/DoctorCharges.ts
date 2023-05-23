import { Column, Entity, Index } from "typeorm";

@Index("PK_DoctorCharges", ["doctorId", "serviceType"], { unique: true })
@Entity("DoctorCharges", { schema: "dbo" })
export class DoctorCharges {
  @Column("varchar", { primary: true, name: "DoctorId", length: 10 })
  doctorId: string;

  @Column("int", { primary: true, name: "ServiceType" })
  serviceType: number;

  @Column("numeric", { name: "ChargeId", precision: 18, scale: 0 })
  chargeId: number;

  @Column("bit", { name: "IsActive" })
  isActive: boolean;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
