import { Column, Entity, Index } from "typeorm";

@Index("PK_QuickBookPatientBalance", ["pin"], { unique: true })
@Entity("QuickBookPatientBalance", { schema: "dbo" })
export class QuickBookPatientBalance {
  @Column("varchar", { primary: true, name: "PIN", length: 12 })
  pin: string;

  @Column("numeric", { name: "Balance", precision: 18, scale: 2 })
  balance: number;

  @Column("bit", { name: "Active" })
  active: boolean;

  @Column("varchar", { name: "ReceiptNumber", nullable: true, length: 12 })
  receiptNumber: string | null;
}
