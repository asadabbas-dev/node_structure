import { Column, Entity, Index } from "typeorm";

@Index("PK_PatientVoucher", ["voucherNo"], { unique: true })
@Entity("PatientVoucher", { schema: "dbo" })
export class PatientVoucher {
  @Column("varchar", { primary: true, name: "VoucherNo", length: 50 })
  voucherNo: string;

  @Column("numeric", { name: "Amount", precision: 18, scale: 2 })
  amount: number;

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
