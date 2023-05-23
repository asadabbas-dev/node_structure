import { Column, Entity } from "typeorm";

@Entity("PatientCreditNotification", { schema: "dbo" })
export class PatientCreditNotification {
  @Column("varchar", { name: "PIN", length: 50 })
  pin: string;

  @Column("varchar", { name: "BillNumber", length: 50 })
  billNumber: string;

  @Column("numeric", { name: "CreditAmount", precision: 18, scale: 2 })
  creditAmount: number;

  @Column("varchar", { name: "UserId", length: 200 })
  userId: string;

  @Column("varchar", { name: "Remarks", length: 1000 })
  remarks: string;

  @Column("bit", { name: "Email", default: () => "(0)" })
  email: boolean;

  @Column("bit", { name: "SMS", default: () => "(0)" })
  sms: boolean;
}
