import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_SettlementMaster", ["settlementId"], { unique: true })
@Entity("SettlementMaster", { schema: "dbo" })
export class SettlementMaster {
  @PrimaryGeneratedColumn({
    type: "numeric",
    name: "SettlementID",
    precision: 18,
    scale: 0,
  })
  settlementId: number;

  @Column("int", { name: "TPAId" })
  tpaId: number;

  @Column("varchar", { name: "FileName", length: 50 })
  fileName: string;

  @Column("int", { name: "TotalRecordCount" })
  totalRecordCount: number;

  @Column("numeric", { name: "ClaimedAmount", precision: 18, scale: 2 })
  claimedAmount: number;

  @Column("numeric", { name: "ReceivedAmount", precision: 18, scale: 2 })
  receivedAmount: number;

  @Column("numeric", { name: "AllocatedAmount", precision: 18, scale: 2 })
  allocatedAmount: number;

  @Column("datetime", { name: "SettlementDate" })
  settlementDate: Date;

  @Column("datetime", { name: "AllocatedDate", nullable: true })
  allocatedDate: Date | null;

  @Column("varchar", { name: "PaymentReference", nullable: true, length: 50 })
  paymentReference: string | null;

  @Column("bit", { name: "IsAllocated", default: () => "(0)" })
  isAllocated: boolean;

  @Column("bit", { name: "IsPosting", default: () => "(0)" })
  isPosting: boolean;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifyBy", length: 50 })
  modifyBy: string;

  @Column("datetime", { name: "ModifyDate" })
  modifyDate: Date;
}
